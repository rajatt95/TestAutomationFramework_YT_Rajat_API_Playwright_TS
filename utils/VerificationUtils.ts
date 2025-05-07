import { expect, APIResponse } from '@playwright/test';
import Ajv, { JSONSchemaType, ValidateFunction } from 'ajv';

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

  /**
   * Asserts that the entire response body conforms to a given JSON schema.
   * Uses AJV for schema validation.
   * 
   * @param responseBody - The actual JSON response body to validate.
   * @param schema - The JSON schema to validate against.
   */
  assertResponseSchema<T = any>(responseBody: unknown, schema: JSONSchemaType<T> | object): void {
  
    console.log(`Asserts that response body matches the provided JSON schema.`);

    const ajv = new Ajv();
    const validate: ValidateFunction = ajv.compile(schema);
    const isValid = validate(responseBody);

    if (!isValid && validate.errors) {
      const errorMessages = validate.errors
      .map(err => `${err.instancePath || '(root)'} ${err.message}`)
      .join(', ');
      throw new Error(`Schema validation failed: ${errorMessages}`);
    }
   
    expect(isValid).toBe(true);
  
  }

}

export default new VerificationUtils();