import { test } from '../tests/ui/fixtures/auth.fixture';
import { ROUTES } from '../tests/ui/utils/routes';

test.describe('Bank to Vault', () => {
  test('unauthenticated direct access redirects to login', async ({ page, loginPage }) => {
    await page.context().clearCookies();
    await page.goto(ROUTES.transfers.bankToVault);
    await loginPage.expectLoginVisible();
  });
});
