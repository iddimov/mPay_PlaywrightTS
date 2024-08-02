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
    return this.apiClient.getEndpoint(`/wallets/${walletId}`);
  }

  async getUserWallets(userId: string) {
    return this.apiClient.getEndpoint(`${userId}/wallets`);
  }
  
  async getUsersWallets(userId: string) {
    return this.apiClient.getEndpoint(`users/${userId}/wallets`);
  }
}