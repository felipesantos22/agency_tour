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

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/app-heroku'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/app-heroku/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
