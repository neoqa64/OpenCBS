import { test } from '../tests/ui/fixtures/auth.fixture';

test.describe('Vault to Bank', () => {
  test('Transfer button disabled when form incomplete', async ({
    authedPage,
    vaultToBankPage,
  }) => {
    await vaultToBankPage.open();
    await vaultToBankPage.expectLoaded();
    await vaultToBankPage.expectTransferButtonDisabled();

    await vaultToBankPage.fillAmount('100');
    await vaultToBankPage.expectTransferButtonDisabled();

    await vaultToBankPage.fillDescription('Partial fill — button should stay disabled');
    await vaultToBankPage.expectTransferButtonDisabled();
  });
});
