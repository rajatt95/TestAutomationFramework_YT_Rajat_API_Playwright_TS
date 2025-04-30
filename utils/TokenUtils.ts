/**
 * Utility class for managing and providing API tokens.
 * Can be extended in future to support token generation or retrieval from secure sources.
 */
class TokenUtils {
  
  /**
   * Returns the API token to be used in authenticated requests.
   *
   * @returns {string} The API token string.
   */
  public getToken(): string {
      return 'reqres-free-v1';
    }
  }
  
  export default new TokenUtils();
  