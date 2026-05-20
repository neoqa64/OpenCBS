import { test, expect } from '../tests/ui/fixtures/auth.fixture';

test.describe('Bank to Vault', () => {
  test('confirmation NO cancels and preserves form', async ({
    authedPage,
    bankToVaultPage,
  }) => {
    await bankToVaultPage.open();
    await bankToVaultPage.expectLoaded();

    await bankToVaultPage.selectBankAccount('');
    await bankToVaultPage.selectVault();
    await bankToVaultPage.fillAmount('50');
    await bankToVaultPage.fillChequeNumber('CHQ-NO-001');
    await bankToVaultPage.fillChequePayee('Cancelled Payee');
    await bankToVaultPage.selectPersonInCharge('Admin');
    await bankToVaultPage.fillDescription('This transfer will be cancelled');

    await bankToVaultPage.clickTransfer();
    await bankToVaultPage.confirmNo();

    await expect(bankToVaultPage.confirmPopup).not.toBeVisible();
    await bankToVaultPage.expectUrl('from-bank-to-vault');
    await bankToVaultPage.expectNoToast();
  });
});
