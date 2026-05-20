import { test, expect } from '../../fixtures/auth.fixture';

test.describe('Bank to Vault', () => {
  test('bank account lookup reveals balance and currency', async ({
    authedPage,
    bankToVaultPage,
  }) => {
    await bankToVaultPage.open();
    await bankToVaultPage.expectLoaded();
    await expect(bankToVaultPage.balanceField).not.toBeVisible();

    await bankToVaultPage.selectBankAccount('');

    await bankToVaultPage.expectBalanceVisible();
    await bankToVaultPage.expectCurrencyPopulated();
  });
});
