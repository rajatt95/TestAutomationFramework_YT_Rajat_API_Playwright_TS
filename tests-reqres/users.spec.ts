import { test, expect, APIRequestContext, APIResponse } from '@playwright/test';

import EndpointUtils from '../utils/EndpointUtils';
import RequestBodyUtils from '../utils/RequestBodyUtils';
import RequestUtils from '../utils/RequestUtils';

test.describe('Users', () => {

  const apiKey: string = 'reqres-free-v1';

  const singleUserEndpoint = EndpointUtils.SINGLE_USER;
  const userEndpoint = EndpointUtils.USER;

  test('GET Request - Get User Detail. @regression', async ({ request }: { request: APIRequestContext }) => {
    const response = await RequestUtils.get(request, singleUserEndpoint);
    const responseBody: any = await response.json();

    console.log(responseBody);

    expect(response.status()).toBe(200);
    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.first_name).toBe('Janet');
    expect(responseBody.data.last_name).toBe('Weaver');
    expect(responseBody.data.email).toBeTruthy();
  });

  test('POST Request - Create New User. @regression @sanity', async ({ request }: { request: APIRequestContext }) => {
    const response = await RequestUtils.post(request, userEndpoint, RequestBodyUtils.USER_CREATE);

    const responseBody: any = await response.json();

    console.log(responseBody);

    expect(responseBody.id).toBe(1111);
    expect(responseBody.createdAt).toBeTruthy();
  });

  test('PUT Request - Update User. @regression @sanity', async ({ request }: { request: APIRequestContext }) => {
    const response = await RequestUtils.put(request, singleUserEndpoint, RequestBodyUtils.USER_UPDATE);

    const responseBody: any = await response.json();

    console.log(responseBody);

    expect(response.status()).toBe(200);
    expect(responseBody.name).toBe('test name - updated');
    expect(responseBody.job).toBe('test job - updated');
    expect(responseBody.updatedAt).toBeTruthy();
  });

  test('DELETE Request - Delete User. @regression', async ({ request }: { request: APIRequestContext }) => {
    const response = await RequestUtils.delete(request, singleUserEndpoint);
  
    expect(response.status()).toBe(204);
  });
});