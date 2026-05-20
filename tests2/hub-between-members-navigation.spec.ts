import { test } from '../tests/ui/fixtures/auth.fixture';

test.describe('Transfers Hub', () => {
  test('between members tile navigates to /transfers/between-members', async ({
    authedPage,
    hubPage,
    betweenMembersPage,
  }) => {
    await hubPage.open();
    await hubPage.expectHubLoaded();
    await hubPage.clickBetweenMembers();
    await betweenMembersPage.expectUrl('between-members');
    await betweenMembersPage.expectLoaded();
  });
});
