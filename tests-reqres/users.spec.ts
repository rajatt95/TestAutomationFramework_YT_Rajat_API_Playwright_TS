import { test, expect, APIRequestContext, APIResponse } from '@playwright/test';

import EndpointUtils from '../utils/EndpointUtils';
import RequestBodyUtils from '../utils/RequestBodyUtils';

test.describe('Users', () => {

  const apiKey: string = 'reqres-free-v1';

  const singleUserEndpoint = EndpointUtils.SINGLE_USER;
  const userEndpoint = EndpointUtils.USER;

  test('GET Request - Get User Detail. @regression', async ({ request }: { request: APIRequestContext }) => {
    const response: APIResponse = await request.get(singleUserEndpoint, {
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

  test('POST Request - Create New User. @regression @sanity', async ({ request }: { request: APIRequestContext }) => {
    const response: APIResponse = await request.post(userEndpoint, {
      data: RequestBodyUtils.USER_CREATE
      , headers: {
        'x-api-key': apiKey,   
      } 
    });

    const responseBody: any = await response.json();

    console.log(responseBody);

    expect(responseBody.id).toBe(1111);
    expect(responseBody.createdAt).toBeTruthy();
  });

  test('PUT Request - Update User. @regression @sanity', async ({ request }: { request: APIRequestContext }) => {
    const response: APIResponse = await request.put(singleUserEndpoint, {
      data: RequestBodyUtils.USER_UPDATE
      , headers: {
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

  test('DELETE Request - Delete User. @regression', async ({ request }: { request: APIRequestContext }) => {
    const response: APIResponse = await request.delete(singleUserEndpoint, {
      headers: {
        'x-api-key': apiKey,
      },
    });
  
    expect(response.status()).toBe(204);
  });
});