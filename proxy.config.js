const proxy = [
  {
    context: ["/api"],
    target: "http://localhost:8000",
    changeOrigin: true,
    pathRewrite: { "^/": "" },
  },
];
module.exports = proxy;
