// lib/swagger.ts
import swaggerJsDoc from 'swagger-jsdoc';
import schemas from '../schemas.json'; // Adjust the path if necessary

const options: swaggerJsDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Guardian One API',
      version: '1.0.0',
    },
    components: {
      schemas: schemas.definitions, // Reference the definitions directly
    },
  },
  apis: ['./src/**/*.ts'], // Path to the API docs
};

const specs = swaggerJsDoc(options);

export { specs };
