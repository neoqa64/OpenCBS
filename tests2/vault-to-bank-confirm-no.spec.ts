import { test, expect } from '../tests/ui/fixtures/auth.fixture';

test.describe('Vault to Bank', () => {
  test('confirmation NO cancels and preserves form', async ({
    authedPage,
    vaultToBankPage,
  }) => {
    await vaultToBankPage.open();
    await vaultToBankPage.expectLoaded();

    await vaultToBankPage.selectVault();
    await vaultToBankPage.selectBankAccount('');
    await vaultToBankPage.fillAmount('50');
    await vaultToBankPage.selectCurrency('USD');
    await vaultToBankPage.selectPersonInCharge('Admin');
    await vaultToBankPage.fillDescription('Transfer to be cancelled via NO');

    await vaultToBankPage.clickTransfer();
    await vaultToBankPage.confirmNo();

    await expect(vaultToBankPage.confirmPopup).not.toBeVisible();
    await vaultToBankPage.expectUrl('from-vault-to-bank');
    await vaultToBankPage.expectNoToast();
  });
});
