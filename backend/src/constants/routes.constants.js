/**
Defines constants for various API routes used in the application.
@typedef {Object} RoutesConstants
@property {string} API_DOCS - The route to access the API documentation.
@property {Object} USERS - The routes related to user management.
*/
/**

A constant object containing the API routes used in the application.

@type {RoutesConstants}
*/
export const routesConstants = {
    API_DOCS: '/api/docs',
    USERS: {
        CREATE: '/api/users/create',
        LOGIN: '/api/users/login',
    },
};
