import { test, expect } from '../../fixtures/auth.fixture';

test.describe('Vault to Bank', () => {
  test('form loads with disabled Transfer button', async ({
    authedPage,
    vaultToBankPage,
  }) => {
    await vaultToBankPage.open();
    await vaultToBankPage.expectLoaded();
    await vaultToBankPage.expectUrl('from-vault-to-bank');
    await vaultToBankPage.expectTransferButtonDisabled();
    await expect(vaultToBankPage.cancelButton).toBeVisible();
    await vaultToBankPage.expectDatePreFilled();
    await vaultToBankPage.expectBalanceNotVisible();
  });
});
