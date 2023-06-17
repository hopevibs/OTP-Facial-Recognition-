import { registerEndpoint } from './register.endpoint.js';
import { loginEndpoint } from './login.endpoint.js';
import { routesConstants } from '../../constants';
// import {enable2FAEndpoint} from './enable2FA.endpoint';

export const endpoints = {
    paths: {
        [routesConstants.USERS.CREATE]: registerEndpoint,
        [routesConstants.USERS.LOGIN]: loginEndpoint,
        // [routesConstants.USERS.OTP_VERIFY]: enable2FAEndpoint,
        routesConstants
    },
};
