import { expect, APIResponse } from '@playwright/test';

class VerificationUtils {

  assertResponseStatusCode(response: APIResponse, expectedStatusCode: number): void {
    console.log(`Asserts that Response Status code is '${expectedStatusCode}'.`);
    expect(response.status()).toBe(expectedStatusCode);
  }

  assertResponseBodyKeyPresent(responseBody: Record<string, any>, expectedKeyName: string): void {
    console.log(`Asserts that Response Body has property: '${expectedKeyName}'.`);
    expect(responseBody).toHaveProperty(expectedKeyName);
  }

  assertResponseBodyKeyValue(responseBody: Record<string, any>, expectedKeyName: string, expectedValue: any): void {
    console.log(`Asserts that Response Body has key: '${expectedKeyName}' with value: '${expectedValue}'.`);
    expect(responseBody[expectedKeyName]).toBe(expectedValue);
  }
}

export default new VerificationUtils();