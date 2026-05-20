import { test } from '../tests/ui/fixtures/auth.fixture';

test.describe('Transfers Hub', () => {
  test('vault to bank tile navigates to /transfers/from-vault-to-bank', async ({
    authedPage,
    hubPage,
    vaultToBankPage,
  }) => {
    await hubPage.open();
    await hubPage.expectHubLoaded();
    await hubPage.clickVaultToBank();
    await vaultToBankPage.expectUrl('from-vault-to-bank');
    await vaultToBankPage.expectLoaded();
  });
});
