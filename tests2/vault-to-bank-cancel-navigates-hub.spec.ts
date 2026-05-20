import { test } from '../tests/ui/fixtures/auth.fixture';
import { ROUTES } from '../tests/ui/utils/routes';

test.describe('Vault to Bank', () => {
  test('Cancel button navigates to hub', async ({ authedPage, vaultToBankPage }) => {
    await vaultToBankPage.open();
    await vaultToBankPage.expectLoaded();

    await vaultToBankPage.fillAmount('999');
    await vaultToBankPage.fillDescription('Cancel navigation test');

    await vaultToBankPage.clickCancel();

    await vaultToBankPage.expectUrl(ROUTES.transfers.hub);
  });
});
