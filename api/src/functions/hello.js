const { app } = require("@azure/functions");

app.http("hello", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    const url = new URL(request.url);
    const name = url.searchParams.get("name") || "Gast";

    return {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `Hallo ${name}, willkommen bei der serverlosen Web-Anwendung!`,
      }),
    };
  },
});
