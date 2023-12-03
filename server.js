const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + "/dist/agency-tour"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/agency-tour/index.html"));
});

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);
