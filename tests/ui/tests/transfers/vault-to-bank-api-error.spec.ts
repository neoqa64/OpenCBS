import { test } from '../../fixtures/auth.fixture';

test.describe('Vault to Bank', () => {
  test('API error shows error toast and stays on form', async ({
    authedPage,
    vaultToBankPage,
    page,
  }) => {
    await page.route('**/api/transfers/from-vault-to-bank', async (route) => {
      await route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'INSUFFICIENT_FUNDS', message: 'INSUFFICIENT_FUNDS' }),
      });
    });

    await vaultToBankPage.open();
    await vaultToBankPage.expectLoaded();

    await vaultToBankPage.selectVault();
    await vaultToBankPage.selectBankAccount('');
    await vaultToBankPage.fillAmount('9999999');
    await vaultToBankPage.selectCurrency('USD');
    await vaultToBankPage.selectPersonInCharge('Admin');
    await vaultToBankPage.fillDescription('API error intercept test');

    await vaultToBankPage.clickTransfer();
    await vaultToBankPage.confirmYes();

    await vaultToBankPage.expectErrorToast();
    await vaultToBankPage.expectUrl('from-vault-to-bank');
  });
});
