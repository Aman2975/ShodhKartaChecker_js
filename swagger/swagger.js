import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Quiz Platform API",
    description: "Auto generated API documentation",
  },
  host: "localhost:3000",
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      in: "header",
      name: "Authorization", // 👈 your JWT
    },
  },
};

const outputFile = "./swagger-output.json";
const routes = ["./server.js"];
const { default: swaggerAutogenFn } = await import("swagger-autogen");
swaggerAutogenFn()(outputFile, routes, doc);