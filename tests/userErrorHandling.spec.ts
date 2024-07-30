import { test, expect } from '@playwright/test';
import { UserApi } from '../pages/userApi';
import userData from '../fixtures/data/invalidUserData.json';

test.describe('Error handling API Tests', () => {
  let userApi: UserApi;

  test.beforeAll(() => {
    userApi = new UserApi();
  });

    test('Handle user creation error', {tag: ['@smoke', '@users']},async () => {
    const response = await userApi.createNaturalUser(userData.newUser);
    const responseBody = await response.json();
   
    test.step('Verify response status is between 400 and 500', ()=>{ 
      expect(response.status()).toBeGreaterThanOrEqual(400);
      expect(response.status()).toBeLessThan(500);    
    })   
    
    test.step('Verify response body contains error type', ()=>{ 
      expect(responseBody).toHaveProperty('Type'); 
    }) 

    test.step('Verify response body contains error message', ()=>{ 
      expect(responseBody).toHaveProperty('errors'); 
    }) 
  });

  test('Handle fetching user error', {tag: ['@smoke', '@users']},async () => {
    const invalidUserId = 'non-existent-user-id';
    const response = await userApi.getUser(invalidUserId);
    
    expect(response.status()).toBeGreaterThanOrEqual(400);
    expect(response.status()).toBeLessThan(500);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('Type', 'ressource_not_found');
    expect(responseBody).toHaveProperty('errors');
  });
});