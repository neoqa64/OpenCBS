import { test } from '../tests/ui/fixtures/auth.fixture';
import { ROUTES } from '../tests/ui/utils/routes';

test.describe('Transfers Hub', () => {
  test('unauthenticated access redirects to login', async ({ page, loginPage }) => {
    await page.context().clearCookies();
    await page.goto(ROUTES.transfers.hub);
    await loginPage.expectLoginVisible();
  });
});
