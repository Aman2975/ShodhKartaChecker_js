import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ShodhKartaChecker API",
      version: "1.0.0",
      description: "API documentation for ShodhKartaChecker",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development Server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", // 👈 your JWT auth
        },
      },
    },
  },
  apis: ["./routes/*.js"], // 👈 reads JSDoc comments from all route files
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;