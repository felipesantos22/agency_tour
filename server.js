// const express = require("express");
// const path = require("path");

// const app = express();

// // Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
// app.use(express.static(__dirname + "/dist/agency-tour"));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname + "/dist/agency-tour/index.html"));
// });

// // Inicia a aplicação pela porta configurada
// app.listen(process.env.PORT || 8080);

const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer();

// Servir os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(path.join(__dirname, 'dist/agency-tour')));

// Rota para redirecionar solicitações para a API usando o proxy
app.all('/api/*', (req, res) => {
  proxy.web(req, res, {
    target: 'https://agency-tour-backend-a10abe72bb88.herokuapp.com',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  });
});

// Rota para redirecionar todas as outras solicitações para o Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/agency-tour/index.html'));
});

// Lidar com erros no proxy
proxy.on('error', (err, req, res) => {
  console.error('Erro no proxy:', err);
  res.status(500).send('Erro interno no servidor');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
