/**
 * Utility class for managing and providing endpoint URLs for various scenarios.
 */
class EndpointUtils {
    // Users
    public readonly SINGLE_USER = 'users/2';
    public readonly USER = 'user';
    public readonly LIST_USERS = 'users?page=2';
    public readonly SINGLE_USER_NOT_FOUND = 'users/23';
    
    // Register
    public readonly REGISTER = 'register';
    
    // Login
    public readonly LOGIN = 'login';
      
  }
  
  export default new EndpointUtils;
  