/**
 * Object containing information about the schema used by the API.
 * @typedef {Object} SchemaDoc
 * @property {Object} CreateUserInput - The schema for creating a new user.
 * @property {string} CreateUserInput.type - The type of the object, which is "object".
 * @property {Object} CreateUserInput.properties - An object containing the properties of the object.
 * @property {Object} CreateUserInput.properties.username - The schema for the username property.
 * @property {string} CreateUserInput.properties.username.type - The type of the username property, which is "string".
 * @property {string} CreateUserInput.properties.username.example - An example value for the username property.
 * @property {Object} CreateUserInput.properties.email - The schema for the email property.
 * @property {string} CreateUserInput.properties.email.type - The type of the email property, which is "string".
 * @property {string} CreateUserInput.properties.email.example - An example value for the email property.
 * @property {Object} CreateUserInput.properties.password - The schema for the password property.
 * @property {string} CreateUserInput.properties.password.type - The type of the password property, which is "string".
 * @property {string} CreateUserInput.properties.password.example - An example value for the password property.
 */
export const schemaDoc = {
    CreateUserInput: {
        type: 'object',
        properties: {
            username: {
                type: 'string',
                example: 'werey',
            },
            email: {
                type: 'string',
                example: 'werey@wereyacademy.com',
            },
            password: {
                type: 'string',
                example: 'wereyfamily',
            },
            phoneNumber: {
                type: 'string',
                example: '681778215',
            },
        },
    },
    LoginUserInput: {
        type: 'object',
        properties: {
            email: {
                type: 'string',
                example: 'werey@wereyacademy.com',
            },
            password: {
                type: 'string',
                example: 'wereyfamily',
            },
            createdAt: {
                type: 'string',
                example: '2023-05-02T22:10:55.697Z',
            },
            updatedAt: {
                type: 'string',
                example: '2023-05-02T22:10:55.697Z',
            },
        },
    },
    enable2FAInput: {
        type: 'object',
        properties: {
            phoneNumber: {
                type: 'string',
                example: '681778215',
            },
        },
    },
    UserInput: {
        type: 'object',
        properties: {
            username: {
                type: 'string',
                example: 'werey',
            },
            email: {
                type: 'string',
                example: 'werey@wereyacademy.com',
            },
            password: {
                type: 'string',
                example: 'wereyfamily',
            },
            createdAt: {
                type: 'string',
                example: '2023-05-02T22:10:55.697Z',
            },
            updatedAt: {
                type: 'string',
                example: '2023-05-02T22:10:55.697Z',
            },
        },
    },
};
