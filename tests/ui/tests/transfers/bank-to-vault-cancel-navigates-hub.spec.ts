import { test } from '../../fixtures/auth.fixture';
import { ROUTES } from '../../utils/routes';

test.describe('Bank to Vault', () => {
  test('Cancel button navigates to hub', async ({ authedPage, bankToVaultPage }) => {
    await bankToVaultPage.open();
    await bankToVaultPage.expectLoaded();

    await bankToVaultPage.fillAmount('999');
    await bankToVaultPage.fillDescription('Cancel navigation test');

    await bankToVaultPage.clickCancel();

    await bankToVaultPage.expectUrl(ROUTES.transfers.hub);
  });
});
