import requestBodyUserCreate from '../test-data/request-body/users/user_create.json';
import requestBodyUserUpdatePut from '../test-data/request-body/users/user_update_put.json';
import requestBodyUserUpdatePatch from '../test-data/request-body/users/user_update_patch.json';

import requestBodyRegisterSuccessful from '../test-data/request-body/register/register-successful.json';
import requestBodyRegisterUnsuccessful from '../test-data/request-body/register/register-unsuccessful.json';

import requestBodyLoginSuccessful from '../test-data/request-body/login/login-successful.json';
import requestBodyLoginUnsuccessful from '../test-data/request-body/login/login-unsuccessful.json';

/**
 * Utility class for managing and providing request body data for various scenarios.
 */
class RequestBodyUtils {

    // Users
    USER_CREATE = requestBodyUserCreate;
    USER_UPDATE_PUT = requestBodyUserUpdatePut;
    USER_UPDATE_PATCH = requestBodyUserUpdatePatch;

    // Register
    REGISTER_SUCCESSFUL = requestBodyRegisterSuccessful;
    REGISTER_UNSUCCESSFUL = requestBodyRegisterUnsuccessful;

    // Login
    LOGIN_SUCCESSFUL = requestBodyLoginSuccessful;
    LOGIN_UNSUCCESSFUL = requestBodyLoginUnsuccessful;

}

export default new RequestBodyUtils;