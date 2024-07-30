import { ApiClient } from '../fixtures/apiClient';

export class WalletApi {
  apiClient: ApiClient;

  constructor() {
    this.apiClient = new ApiClient();
  }

  async createAWallet(walletData: any) {
    return this.apiClient.postEndpoint('/wallets', walletData);
  }

  async getAWallet(walletId: string) {
    return this.apiClient.getEndPoint(`/wallets/${walletId}`);
  }

  async getUserWallets(userId: string) {
    return this.apiClient.getEndPoint(`${userId}/wallets`);
  }
  
  async getUsersWallets(userId: string) {
    return this.apiClient.getEndPoint(`users/${userId}/wallets`);
  }
}