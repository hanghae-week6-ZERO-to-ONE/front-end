const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
	app.use(
		createProxyMiddleware({
			target: "http://3.38.153.4:8080",
			changeOrigin: true,
		})
	);
};
