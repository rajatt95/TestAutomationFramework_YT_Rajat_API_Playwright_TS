import { APIResponse } from '@playwright/test';

class ResponseUtils {
  async parseAndLog(response: APIResponse) {
    try {
      const responseBody = JSON.parse(await response.text());
      console.log('------------------------------------------------------------');
      console.log('Parsed Response Body:');
      console.log(responseBody);
      console.log('------------------------------------------------------------');
      return responseBody;
    } catch (error: any) {
      console.error('Error parsing response:', error.message);
      throw error;
    }
  }
}

export default new ResponseUtils();
