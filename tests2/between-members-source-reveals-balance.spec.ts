import { test } from '../tests/ui/fixtures/auth.fixture';

test.describe('Between Members', () => {
  test('source account selection reveals balance and currency', async ({
    authedPage,
    betweenMembersPage,
  }) => {
    await betweenMembersPage.open();
    await betweenMembersPage.expectLoaded();
    await betweenMembersPage.expectBalanceNotVisible();

    await betweenMembersPage.selectSourceAccount('');

    await betweenMembersPage.expectBalanceVisible();
    await betweenMembersPage.expectCurrencyPopulated();
  });
});
