import requestBodyUserCreate from '../test-data/users/user_create.json';
import requestBodyUserUpdate from '../test-data/users/user_update.json';

import requestBodyRegisterSuccessful from '../test-data/register/register-successful.json';
import requestBodyRegisterUnsuccessful from '../test-data/register/register-unsuccessful.json';

/**
 * Utility class for managing and providing request body data for various scenarios.
 */
class RequestBodyUtils {

    // Users
    USER_CREATE = requestBodyUserCreate;
    USER_UPDATE = requestBodyUserUpdate;

    // Register
    REGISTER_SUCCESSFUL = requestBodyRegisterSuccessful;
    REGISTER_UNSUCCESSFUL = requestBodyRegisterUnsuccessful;
}

export default new RequestBodyUtils;