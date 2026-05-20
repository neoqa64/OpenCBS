import { test } from '../tests/ui/fixtures/auth.fixture';

test.describe('Between Members', () => {
  test('API error shows error toast and stays on form', async ({
    authedPage,
    betweenMembersPage,
    page,
  }) => {
    await page.route('**/api/transfers/between-members', async (route) => {
      await route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'TRANSFER_FAILED', message: 'TRANSFER_FAILED' }),
      });
    });

    await betweenMembersPage.open();
    await betweenMembersPage.expectLoaded();

    await betweenMembersPage.selectSourceAccount('');
    await betweenMembersPage.selectDestinationAccount('');
    await betweenMembersPage.fillAmount(9999999);
    await betweenMembersPage.fillDescription('API error intercept test');

    await betweenMembersPage.clickTransfer();
    await betweenMembersPage.confirmYes();

    await betweenMembersPage.expectErrorToast();
    await betweenMembersPage.expectUrl('between-members');
  });
});
