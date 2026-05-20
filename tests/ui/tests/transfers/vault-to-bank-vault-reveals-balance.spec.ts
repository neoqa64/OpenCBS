import { test } from '../../fixtures/auth.fixture';

test.describe('Vault to Bank', () => {
  test('vault selection reveals balance', async ({ authedPage, vaultToBankPage }) => {
    await vaultToBankPage.open();
    await vaultToBankPage.expectLoaded();
    await vaultToBankPage.expectBalanceNotVisible();
    await vaultToBankPage.selectVault();
    await vaultToBankPage.expectBalanceVisible();
  });
});
