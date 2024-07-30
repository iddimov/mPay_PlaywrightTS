export class AuthClient{
  
  async generateBearerToken(apiUrl:string, apiVersion: string, clientId: string, apiKey: string): Promise<string>{
    const credentials = `${clientId}:${apiKey}`;
    const encodedCredentials = Buffer.from(credentials).toString('base64');

    const response = await fetch(`${apiUrl}/${apiVersion}/oauth/token`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${encodedCredentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const data = await response.json();
    
    if (!data.access_token) {
      throw new Error('Access token not found in response');
    }

    return data.access_token;    
  }  
}