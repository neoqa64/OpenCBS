import { test } from '../tests/ui/fixtures/auth.fixture';

test.describe('Bank to Vault', () => {
  test('API error shows error toast and stays on form', async ({
    authedPage,
    bankToVaultPage,
    page,
  }) => {
    await page.route('**/api/transfers/from-bank-to-vault', async (route) => {
      await route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'INSUFFICIENT_FUNDS', message: 'INSUFFICIENT_FUNDS' }),
      });
    });

    await bankToVaultPage.open();
    await bankToVaultPage.expectLoaded();

    await bankToVaultPage.selectBankAccount('');
    await bankToVaultPage.selectVault();
    await bankToVaultPage.fillAmount('9999999');
    await bankToVaultPage.fillChequeNumber('CHQ-ERR-001');
    await bankToVaultPage.fillChequePayee('Error Test Payee');
    await bankToVaultPage.selectPersonInCharge('Admin');
    await bankToVaultPage.fillDescription('API error intercept test');

    await bankToVaultPage.clickTransfer();
    await bankToVaultPage.confirmYes();

    await bankToVaultPage.expectErrorToast();
    await bankToVaultPage.expectUrl('from-bank-to-vault');
  });
});
