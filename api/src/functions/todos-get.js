const { app } = require("@azure/functions");

app.http("todos-get", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "todos",
  handler: async () => {
    return {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([]),
    };
  },
});
