import { test, expect } from '../tests/ui/fixtures/auth.fixture';

test.describe('Bank to Vault', () => {
  test('form loads with required fields and disabled Transfer button', async ({
    authedPage,
    bankToVaultPage,
  }) => {
    await bankToVaultPage.open();
    await bankToVaultPage.expectLoaded();
    await bankToVaultPage.expectUrl('from-bank-to-vault');
    await bankToVaultPage.expectTransferButtonDisabled();
    await expect(bankToVaultPage.cancelButton).toBeVisible();
    await expect(bankToVaultPage.dateInput).not.toHaveValue('');
    await expect(bankToVaultPage.balanceField).not.toBeVisible();
  });
});
