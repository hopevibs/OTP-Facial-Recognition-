import swaggerUi from 'swagger-ui-express';
import { docs } from './docs/index.js';

/**
 * Add Swagger documentation to an Express app
 * @function
 * @param {Object} app - The Express app object
 * @param {number} port - The port number for the app
 */
export const swaggerDocs = (app, port) => {
    // Serve the Swagger UI at /api/docs
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(docs));

    // Log the URL for the Swagger docs
    console.info(`Docs available at http://localhost:${port}/api/docs`);
};
