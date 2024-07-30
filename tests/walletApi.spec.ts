import { test, expect } from '@playwright/test';
import { WalletApi } from '../pages/walletApi';
import walletData from '../fixtures/data/validWalletData.json';

test.describe('Wallets API Tests', () => {
  let walletApi: WalletApi;
  let newWalletId: string;

  test.beforeAll(() => {
    walletApi = new WalletApi();
  });

  test('Create and verify a new Wallet for a User', {tag: ['@smoke', '@wallets']}, async () => {
    const createWalletResponse = await walletApi.createAWallet(walletData.newWallet);
    const createResponseBody = await createWalletResponse.json();
    newWalletId = createResponseBody.Id;

    test.step('POST - Create a wallet return 200', ()=>{ 
      expect(createWalletResponse.status()).toBe(200);
    })
        
    test.step('POST - Verify wallet\'s data', ()=>{      
      expect(createResponseBody.Description).toBe(walletData.newWallet.Description);
    })
            
    test.step('POST - Verify wallet ID has been created', ()=>{      
      expect(newWalletId).toBeTruthy();
    })       
  });
});
