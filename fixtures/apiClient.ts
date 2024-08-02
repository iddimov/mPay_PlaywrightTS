import { request } from '@playwright/test';
import {API_URL, API_KEY, API_VERSION, CLIENT_ID} from '../.auth/apiAuth.json';
import { AuthClient } from './authClient';

export class ApiClient {
  authClient: AuthClient;

  constructor() {
    this.authClient = new AuthClient();
  }

  private async getToken(){
    const token = await this.authClient.generateBearerToken(API_URL, API_VERSION, CLIENT_ID, API_KEY);
    return token;
  }

  async postEndpoint(endpoint: string, data: any) {
    const token = await this.getToken();
    const response = await (await request.newContext()).post(`${API_URL}/${API_VERSION}/${CLIENT_ID}/${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data
    });
    
    return response;
  }

  async getEndpoint(endpoint: string) {    
    const token = await this.getToken();
    const response = await (await request.newContext()).get(`${API_URL}/${API_VERSION}/${CLIENT_ID}/${endpoint}`, {
      headers: {
        'Authorization':  `Bearer ${token}`
      }
    });

    return response;
  }
}
