import { ApiClient } from '../fixtures/apiClient';

export class UserApi {
  apiClient: ApiClient;

  constructor() {
    this.apiClient = new ApiClient();
  }

  async createNaturalUser(userData: any) {
    return this.apiClient.postEndpoint('users/natural', userData);
  }

  async getUser(userId: string) {
    return this.apiClient.getEndPoint(`users/${userId}`);
  }

  async getAllUser() {
    return this.apiClient.getEndPoint(`users`);
  }
}