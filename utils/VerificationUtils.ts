import { expect, APIResponse } from '@playwright/test';

/** 
 * Utility class for verification and assertion functions related to API responses. 
*/
class VerificationUtils {

  /**
   * Asserts that the response status code matches the expected status code.
   *
   * @param {APIResponse} response - The API response object.
   * @param {number} expectedStatusCode - The expected HTTP status code.
   */
  assertResponseStatusCode(response: APIResponse, expectedStatusCode: number): void {
    console.log(`Asserts that Response Status code is '${expectedStatusCode}'.`);
    expect(response.status()).toBe(expectedStatusCode);
  }

  /**
   * Asserts that a specified key exists in the response body.
   *
   * @param {Record<string, any>} responseBody - The parsed response body.
   * @param {string} expectedKeyName - The key name expected to be present.
   */
  assertResponseBodyKeyPresent(responseBody: Record<string, any>, expectedKeyName: string): void {
    console.log(`Asserts that Response Body has property: '${expectedKeyName}'.`);
    expect(responseBody).toHaveProperty(expectedKeyName);
  }

  /**
   * Asserts that the specified key in the response body has the expected value.
   *
   * @param {Record<string, any>} responseBody - The parsed response body.
   * @param {string} expectedKeyName - The key name to check.
   * @param {any} expectedValue - The expected value associated with the key.
   */
  assertResponseBodyKeyValue(responseBody: Record<string, any>, expectedKeyName: string, expectedValue: any): void {
    console.log(`Asserts that Response Body has key: '${expectedKeyName}' with value: '${expectedValue}'.`);
    expect(responseBody[expectedKeyName]).toBe(expectedValue);
  }
}

export default new VerificationUtils();