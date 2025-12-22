const { app } = require("@azure/functions");

app.http("todos-toggle", {
  methods: ["PATCH"],
  authLevel: "anonymous",
  route: "todos/{id}",
  handler: async (request, context) => {
    const id = context.bindingData.id;

    let body = {};
    try { body = await request.json(); } catch {}

    const payload = { id };
    if (typeof body.done === "boolean") payload.done = body.done;
    if (typeof body.text === "string") payload.text = body.text;

    return {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
  },
});
