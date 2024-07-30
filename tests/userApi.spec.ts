import { test, expect } from '@playwright/test';
import { UserApi } from '../pages/userApi';
import userData from '../fixtures/data/validUserData.json';

test.describe('User API Tests', () => {
  let userApi: UserApi;
  let newUserId: string;

  test.beforeAll(() => {
    userApi = new UserApi();
  });

  test('Create and verify a new Natural User', {tag: ['@smoke', '@users']}, async () => {
    
    const createUserResponse = await userApi.createNaturalUser(userData.newUser);
    const createResponseBody = await createUserResponse.json();
    newUserId = createResponseBody.Id;

    test.step('POST - Create a user and return 200', ()=>{ 
      expect(createUserResponse.status()).toBe(200); 
    })
        
    test.step('POST - Verify user\'s data', ()=>{      
      expect(createResponseBody.Email).toBe(userData.newUser.Email);
    })
    
    const getUserResponse = await userApi.getUser(newUserId); 
    const getResponseBody = await getUserResponse.json();
    
    test.step('GET - User\'s data returns 200', ()=>{      
      expect(getUserResponse.status()).toBe(200);
    })   
    
    test.step('GET - Verify user\'s id', ()=>{      
      expect(getResponseBody.Id).toBe(newUserId);
    })  
  });
});
