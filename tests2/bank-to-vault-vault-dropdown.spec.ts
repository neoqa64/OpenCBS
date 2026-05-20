import { test, expect } from '../tests/ui/fixtures/auth.fixture';

test.describe('Bank to Vault', () => {
  test('vault dropdown selection populates vault field', async ({
    authedPage,
    bankToVaultPage,
  }) => {
    await bankToVaultPage.open();
    await bankToVaultPage.expectLoaded();

    await bankToVaultPage.selectVault();

    const vaultValue = await bankToVaultPage.vaultSelect.inputValue();
    expect(vaultValue).toBeTruthy();
  });
});
