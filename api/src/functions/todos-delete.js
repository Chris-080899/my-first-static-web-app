const { app } = require("@azure/functions");

app.http("todos-delete", {
  methods: ["DELETE"],
  authLevel: "anonymous",
  route: "todos/{id}",
  handler: async () => {
    return { status: 204 };
  },
});
