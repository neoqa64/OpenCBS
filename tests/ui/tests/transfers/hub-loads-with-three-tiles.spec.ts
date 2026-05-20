import { test } from '../../fixtures/auth.fixture';

test.describe('Transfers Hub', () => {
  test('loads with three transfer tiles', async ({ authedPage, hubPage }) => {
    await hubPage.open();
    await hubPage.expectHubLoaded();
    await hubPage.expectCardDescriptions();
  });
});
