import { test, expect } from '../../fixtures/auth.fixture';

test.describe('Bank to Vault', () => {
  test('person in charge lookup searches and selects Administrator', async ({
    authedPage,
    bankToVaultPage,
  }) => {
    await bankToVaultPage.open();
    await bankToVaultPage.expectLoaded();

    await bankToVaultPage.selectPersonInCharge('Admin');

    await expect(bankToVaultPage.personInChargeLookup).toContainText(/Administrator/i);
  });
});
