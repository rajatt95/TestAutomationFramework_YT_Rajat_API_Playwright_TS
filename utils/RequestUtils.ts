import { APIRequestContext } from '@playwright/test';
import TokenUtils from './TokenUtils';

class RequestUtils {

  async get(request: APIRequestContext, endpoint: string) {
    return await request.get(endpoint, {
      headers: {
        'x-api-key': TokenUtils.getToken(),
      },
    });
  }

  async post(request: APIRequestContext, endpoint: string, requestBody: any) {
    return await request.post(endpoint, {
      data: requestBody,
      headers: {
        'x-api-key': TokenUtils.getToken(),
      },
    });
  }

  async put(request: APIRequestContext, endpoint: string, requestBody: any) {
    return await request.put(endpoint, {
      data: requestBody,
      headers: {
        'x-api-key': TokenUtils.getToken(),
      },
    });
  }

  async delete(request: APIRequestContext, endpoint: string) {
    return await request.delete(endpoint, {
      headers: {
        'x-api-key': TokenUtils.getToken(),
      },
    });
  }
}

export default new RequestUtils;
