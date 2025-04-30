import { APIRequestContext, APIResponse } from '@playwright/test';
import TokenUtils from './TokenUtils';

/**
 * Represents the structure of the request body object.
 */
interface RequestBody {
  [key: string]: any;
}

/**
 * Utility class for making HTTP requests and logging request and response details.
 */
class RequestUtils {

  /**
   * Logs details with a specified prefix.
   * @param {string} prefix - The prefix for the log details.
   * @param {Object} details - The details to be logged.
   */
  logDetails(prefix: string, details: object): void {
    console.log('------------------------------------------------------------');
    console.log(`${prefix} Details:`, details);
  }

  /**
   * Logs details for an HTTP request, including method, endpoint, and request body (if applicable).
   * @param {string} method - The HTTP request method (GET, POST, PUT, DELETE).
   * @param {string} endpoint - The endpoint or URL for the request.
   * @param {Object} requestBody - The request body (if applicable).
   */
  logRequestDetails(method: string, endpoint: string, requestBody: RequestBody): void {
    this.logDetails('Request', {
      method,
      endpoint,
      requestBody: (method === 'GET' || method === 'DELETE') ? 'N/A' : JSON.stringify(requestBody),
    });
  }

  /**
   * Logs details for an HTTP response.
   * @param {APIResponse} response - The HTTP response object.
   */
  logResponseDetails(response: APIResponse): void {
    this.logDetails('Response', {
      status: response.status(),
      statusText: response.statusText(),
      url: response.url(),
    });
  }

  /**
   * Makes an HTTP request, logs details, and returns the response.
   * @param {APIRequestContext} request - The request object used for making HTTP requests.
   * @param {string} method - The HTTP request method (GET, POST, PUT, DELETE).
   * @param {string} endpoint - The endpoint or URL for the request.
   * @param {RequestBody} requestBody - The body of the HTTP request.
   * @returns {Promise<APIResponse>} - The HTTP response object wrapped in a Promise.
   */
  async makeRequest(request: APIRequestContext, method: string, endpoint: string, requestBody?: RequestBody): Promise<APIResponse> {
    const headers = {
      'x-api-key': TokenUtils.getToken(),  // Add the x-api-key header
    };

    this.logRequestDetails(method, endpoint, requestBody || {});
    const response = await request[method.toLowerCase()](endpoint, {
      data: requestBody,
      headers,  // Include headers in the request options
    });
    this.logResponseDetails(response);
    return response; // Returning a Promise<APIResponse>
  }

  /**
   * Makes a GET request and returns the response.
   * @param {APIRequestContext} request - The request object used for making HTTP requests.
   * @param {string} endpoint - The endpoint or URL for the request.
   * @returns {Promise<APIResponse>} - The HTTP response object wrapped in a Promise.
   */
  get(request: APIRequestContext, endpoint: string): Promise<APIResponse> {
    return this.makeRequest(request, 'GET', endpoint);
  }

  /**
   * Makes a POST request and returns the response.
   * @param {APIRequestContext} request - The request object used for making HTTP requests.
   * @param {string} endpoint - The endpoint or URL for the request.
   * @param {RequestBody} requestBody - The body of the HTTP request.
   * @returns {Promise<APIResponse>} - The HTTP response object wrapped in a Promise.
   */
  post(request: APIRequestContext, endpoint: string, requestBody: RequestBody): Promise<APIResponse> {
    return this.makeRequest(request, 'POST', endpoint, requestBody);
  }

  /**
   * Makes a PUT request and returns the response.
   * @param {APIRequestContext} request - The request object used for making HTTP requests.
   * @param {string} endpoint - The endpoint or URL for the request.
   * @param {RequestBody} requestBody - The body of the HTTP request.
   * @returns {Promise<APIResponse>} - The HTTP response object wrapped in a Promise.
   */
  put(request: APIRequestContext, endpoint: string, requestBody: RequestBody): Promise<APIResponse> {
    return this.makeRequest(request, 'PUT', endpoint, requestBody);
  }

  /**
   * Makes a DELETE request and returns the response.
   * @param {APIRequestContext} request - The request object used for making HTTP requests.
   * @param {string} endpoint - The endpoint or URL for the request.
   * @returns {Promise<APIResponse>} - The HTTP response object wrapped in a Promise.
   */
  delete(request: APIRequestContext, endpoint: string): Promise<APIResponse> {
    return this.makeRequest(request, 'DELETE', endpoint);
  }

  /**
   * Makes a PATCH request and returns the response.
   * @param {APIRequestContext} request - The request object used for making HTTP requests.
   * @param {string} endpoint - The endpoint or URL for the request.
   * @param {RequestBody} requestBody - The body of the HTTP request.
   * @returns {Promise<APIResponse>} - The HTTP response object wrapped in a Promise.
   */
  patch(request: APIRequestContext, endpoint: string, requestBody: RequestBody): Promise<APIResponse> {
    return this.makeRequest(request, 'PATCH', endpoint, requestBody);
  }
}

export default new RequestUtils();