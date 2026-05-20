import { test, expect } from '../tests/ui/fixtures/auth.fixture';
import { ROUTES } from '../tests/ui/utils/routes';

test.describe('Cross-cutting transfer behavior', () => {
  test('successful transfer on all three forms redirects to /transfers hub', async ({
    authedPage,
    bankToVaultPage,
    vaultToBankPage,
    betweenMembersPage,
    page,
  }) => {
    const successFulfill = async (route: import('@playwright/test').Route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ id: 1 }),
      });
    };
    await page.route('**/api/transfers/from-bank-to-vault', successFulfill);
    await page.route('**/api/transfers/from-vault-to-bank', successFulfill);
    await page.route('**/api/transfers/between-members', successFulfill);

    await bankToVaultPage.open();
    await bankToVaultPage.expectLoaded();
    await bankToVaultPage.selectBankAccount('');
    await bankToVaultPage.selectVault();
    await bankToVaultPage.fillAmount('10');
    await bankToVaultPage.fillChequeNumber('CHQ-REDIR-001');
    await bankToVaultPage.fillChequePayee('Redirect Test Payee');
    await bankToVaultPage.selectPersonInCharge('Admin');
    await bankToVaultPage.fillDescription('Redirect test — bank to vault');
    await bankToVaultPage.expectTransferButtonEnabled();
    await bankToVaultPage.clickTransfer();
    await bankToVaultPage.confirmYes();
    await bankToVaultPage.expectSuccessToast();
    await bankToVaultPage.expectUrl(ROUTES.transfers.hub);
    await expect(page).not.toHaveURL(/transfers\//);

    await vaultToBankPage.open();
    await vaultToBankPage.expectLoaded();
    await vaultToBankPage.selectVault();
    await vaultToBankPage.selectBankAccount('');
    await vaultToBankPage.fillAmount('50');
    await vaultToBankPage.selectCurrency('USD');
    await vaultToBankPage.selectPersonInCharge('Admin');
    await vaultToBankPage.fillDescription('Redirect test — vault to bank');
    await vaultToBankPage.expectTransferButtonEnabled();
    await vaultToBankPage.clickTransfer();
    await vaultToBankPage.confirmYes();
    await vaultToBankPage.expectSuccessToast();
    await vaultToBankPage.expectUrl(ROUTES.transfers.hub);
    await expect(page).not.toHaveURL(/transfers\//);

    await betweenMembersPage.open();
    await betweenMembersPage.expectLoaded();
    await betweenMembersPage.selectSourceAccount('');
    await betweenMembersPage.selectDestinationAccount('');
    await betweenMembersPage.fillAmount(10);
    await betweenMembersPage.fillDescription('Redirect test — between members');
    await betweenMembersPage.expectAutoPrintUnchecked();
    await betweenMembersPage.expectTransferButtonEnabled();
    await betweenMembersPage.clickTransfer();
    await betweenMembersPage.confirmYes();
    await betweenMembersPage.expectSuccessToast();
    await betweenMembersPage.expectUrl(ROUTES.transfers.hub);
    await expect(page).not.toHaveURL(/transfers\//);
  });
});
