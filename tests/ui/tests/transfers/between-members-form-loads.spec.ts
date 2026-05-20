import { test, expect } from '../../fixtures/auth.fixture';

test.describe('Between Members', () => {
  test('form loads with disabled Transfer button', async ({
    authedPage,
    betweenMembersPage,
  }) => {
    await betweenMembersPage.open();
    await betweenMembersPage.expectLoaded();
    await betweenMembersPage.expectUrl('between-members');
    await betweenMembersPage.expectTransferButtonDisabled();
    await expect(betweenMembersPage.cancelButton).toBeVisible();
    await betweenMembersPage.expectDatePreFilled();
    await betweenMembersPage.expectAutoPrintUnchecked();
    await betweenMembersPage.expectBalanceNotVisible();
  });
});
