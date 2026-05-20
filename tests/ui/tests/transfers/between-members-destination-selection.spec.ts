import { test } from '../../fixtures/auth.fixture';

test.describe('Between Members', () => {
  test('destination account selection registers', async ({
    authedPage,
    betweenMembersPage,
  }) => {
    await betweenMembersPage.open();
    await betweenMembersPage.expectLoaded();

    await betweenMembersPage.selectSourceAccount('');
    await betweenMembersPage.selectDestinationAccount('');

    await betweenMembersPage.expectDestinationSelected();
  });
});
