import { test } from '../tests/ui/fixtures/auth.fixture';
import { ROUTES } from '../tests/ui/utils/routes';

test.describe('Between Members', () => {
  test('Cancel button navigates to hub', async ({ authedPage, betweenMembersPage }) => {
    await betweenMembersPage.open();
    await betweenMembersPage.expectLoaded();

    await betweenMembersPage.fillAmount(999);
    await betweenMembersPage.fillDescription('Cancel navigation test');

    await betweenMembersPage.clickCancel();

    await betweenMembersPage.expectUrl(ROUTES.transfers.hub);
  });
});
