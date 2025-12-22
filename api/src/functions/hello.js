const { app } = require("@azure/functions");

app.http("hello", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async () => ({
    status: 200,
    body: "Hello from Azure Functions",
  }),
});
