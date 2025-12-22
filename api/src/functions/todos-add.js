const { app } = require("@azure/functions");
const { randomUUID } = require("crypto");

app.http("todos-add", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "todos",
  handler: async (request) => {
    let body;
    try {
      body = await request.json();
    } catch {
      return { status: 400, body: "Invalid JSON" };
    }

    const text = (body?.text || "").trim();
    if (!text) return { status: 400, body: "Missing text" };

    const todo = {
      id: randomUUID(),
      text,
      done: false,
    };

    return {
      status: 201,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    };
  },
});
