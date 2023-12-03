const proxy = [
  {
    context: ["/api"],
    target: "https://agency-tour-backend-a10abe72bb88.herokuapp.com/",
    changeOrigin: true,
    pathRewrite: { "^/": "" },
  },
];
module.exports = proxy;
