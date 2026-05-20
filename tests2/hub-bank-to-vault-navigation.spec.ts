import { test } from '../tests/ui/fixtures/auth.fixture';

test.describe('Transfers Hub', () => {
  test('bank to vault tile navigates to /transfers/from-bank-to-vault', async ({
    authedPage,
    hubPage,
    bankToVaultPage,
  }) => {
    await hubPage.open();
    await hubPage.expectHubLoaded();
    await hubPage.clickBankToVault();
    await bankToVaultPage.expectUrl('from-bank-to-vault');
    await bankToVaultPage.expectLoaded();
  });
});
