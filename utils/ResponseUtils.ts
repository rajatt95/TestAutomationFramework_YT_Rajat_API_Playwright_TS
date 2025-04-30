import { APIResponse } from '@playwright/test';

/**
 * Utility class for handling and logging HTTP responses.
 */
class ResponseUtils {
  
  /**
   * Parses the response body as JSON and logs it in a readable format.
   * Also logs parsing errors if the response is not in valid JSON format.
   *
   * @param response - The APIResponse object returned by a Playwright API request.
   * @returns A promise that resolves to the parsed response body.
   * @throws If the response cannot be parsed as JSON.
   */
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
