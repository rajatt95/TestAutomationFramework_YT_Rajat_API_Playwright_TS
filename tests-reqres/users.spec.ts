import { test, expect, APIRequestContext, APIResponse } from '@playwright/test';

test.describe('Users', () => {

  const baseUrl: string = 'https://reqres.in/api';
  const apiKey: string = 'reqres-free-v1';

  test('GET Request - Get User Detail', async ({ request }: { request: APIRequestContext }) => {
    const response: APIResponse = await request.get(`${baseUrl}/users/2`, {
        headers: {
          'x-api-key': apiKey,
        },
      });

    const responseBody: any = await response.json();

    console.log(responseBody);

    expect(response.status()).toBe(200);
    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.first_name).toBe('Janet');
    expect(responseBody.data.last_name).toBe('Weaver');
    expect(responseBody.data.email).toBeTruthy();
  });

  test('POST Request - Create New User', async ({ request }: { request: APIRequestContext }) => {
    const response: APIResponse = await request.post(`${baseUrl}/user`, {
      data: {
        id: 1111,
      }, headers: {
        'x-api-key': apiKey,   
      } 
    });

    const responseBody: any = await response.json();

    console.log(responseBody);

    expect(responseBody.id).toBe(1111);
    expect(responseBody.createdAt).toBeTruthy();
  });

  test('PUT Request - Update User', async ({ request }: { request: APIRequestContext }) => {
    const response: APIResponse = await request.put(`${baseUrl}/users/2`, {
      data: {
        name: 'test name - updated',
        job: 'test job - updated',
      }, headers: {
        'x-api-key': apiKey,
      }
    });

    const responseBody: any = await response.json();

    console.log(responseBody);

    expect(response.status()).toBe(200);
    expect(responseBody.name).toBe('test name - updated');
    expect(responseBody.job).toBe('test job - updated');
    expect(responseBody.updatedAt).toBeTruthy();
  });

  test('DELETE Request - Delete User', async ({ request }: { request: APIRequestContext }) => {
    const response: APIResponse = await request.delete(`${baseUrl}/users/2`, {
      headers: {
        'x-api-key': apiKey,
      },
    });
  
    expect(response.status()).toBe(204);
  });
});