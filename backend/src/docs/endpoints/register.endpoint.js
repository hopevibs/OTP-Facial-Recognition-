export const registerEndpoint = {
    post: {
        summary: 'Create a new user',
        description:
            'Creates a new user with the given email, password, and username.',
        tags: ['USERS'],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/CreateUserInput',
                        required: ['email', 'password', 'username', 'phoneNumber'],
                    },
                },
            },
        },
        responses: {
            200: {
                description: 'User created successfully',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                status: {
                                    type: 'string',
                                    description: 'status of the request',
                                    example: 'success',
                                },
                                data: {
                                    type: 'object',
                                    properties: {
                                        id: {
                                            type: 'string',
                                            description:
                                                'The ID of the created user',
                                            example: '6e23d32f43a45s5cfs2',
                                        },
                                        email: {
                                            type: 'string',
                                            example: 'werey@wereyacademy.com',
                                            description:
                                                'The email of the created user',
                                        },
                                        username: {
                                            type: 'string',
                                            description:
                                                'The username of the created user',
                                            example: 'werey',
                                        },
                                        phoneNumber: {
                                            type: 'string',
                                            description:
                                                'The phoneNumber of the user was created',
                                            example: '681778215',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            400: {
                description: 'Invalid request body',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                status: {
                                    type: 'string',
                                    description: 'status of the request',
                                    example: 'fail',
                                },
                                message: {
                                    type: 'string',
                                    description: 'the error message',
                                    example:
                                        'User with this credential already exist',
                                },
                                stack: {
                                    type: 'string',
                                    description: 'the error stack report',
                                    example: 'on createUser in AuthController',
                                },
                            },
                        },
                    },
                },
            },
            403: {
                description: 'User with this email already exists',
            },
            500: {
                description: 'Internal server error',
            },
        },
    },
};
