const proxy = [
  {
    context: ["/api/country"],
    target: "https://agency-tour-backend-a10abe72bb88.herokuapp.com",
    secure: true,
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: { "^/api": "" },
  },
];

module.exports = proxy;