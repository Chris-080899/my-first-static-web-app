const { app } = require("@azure/functions");

app.http("todos-get", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "todos", // <— wichtig: macht /api/todos
  handler: async () => {
    const todos = [
      { id: "1", text: "Azure Static Web App läuft", done: true },
      { id: "2", text: "Azure Function API anbinden", done: false },
      { id: "3", text: "To-Dos im Frontend anzeigen", done: false },
    ];

    return {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todos),
    };
  },
});
