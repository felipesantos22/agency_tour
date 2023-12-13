const proxy = [
  {
    context: ["/api/*"],
    target: "https://agency-tour-backend-a10abe72bb88.herokuapp.com",
    secure: true,
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: { "^/api": "" }, // Isso removerá "/api" do caminho
  },
];

module.exports = proxy;
