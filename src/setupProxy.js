const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "chat-app-backend-wheat.vercel.app",
      changeOrigin: true,
    })
  );
};
