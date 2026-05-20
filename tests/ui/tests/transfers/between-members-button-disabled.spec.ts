import { test } from '../../fixtures/auth.fixture';

test.describe('Between Members', () => {
  test('Transfer button disabled until all required fields filled', async ({
    authedPage,
    betweenMembersPage,
  }) => {
    await betweenMembersPage.open();
    await betweenMembersPage.expectLoaded();
    await betweenMembersPage.expectTransferButtonDisabled();

    await betweenMembersPage.fillAmount(100);
    await betweenMembersPage.expectTransferButtonDisabled();

    await betweenMembersPage.fillDescription('Partial fill — button should stay disabled');
    await betweenMembersPage.expectTransferButtonDisabled();

    await betweenMembersPage.selectSourceAccount('');
    await betweenMembersPage.expectTransferButtonDisabled();

    await betweenMembersPage.selectDestinationAccount('');
    await betweenMembersPage.expectTransferButtonEnabled();
  });
});
