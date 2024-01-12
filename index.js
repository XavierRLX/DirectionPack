const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const emailRoutes = require('./Routes/emailRoutes');

app.use('/email', emailRoutes);
app.post('/email/send-email-forgotpassword', emailRoutes);
app.post('/email/send-email-welcome', emailRoutes);

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/javaScript', express.static(__dirname + '/src/javaScript'));
app.use('/style', express.static(__dirname + '/src/style'));
app.use('/assets/img', express.static(__dirname + '/src/assets/img'));


const path = require('path');

// Defina suas rotas de maneira dinâmica
const routes = [
  { path: '/', file: 'load.html' },
  { path: '/load', file: 'load.html' },
  { path: '/login', file: 'paglogin.html' },
  { path: '/home', file: 'home.html' },
  { path: '/cep', file: 'cep.html' },
];

// Itera sobre o array de rotas e define as rotas dinamicamente
routes.forEach(route => {
  app.get(route.path, (req, res) => {
    const indexPath = path.join(__dirname, `./html/${route.file}`);
    res.sendFile(indexPath);
  });
});

// Middleware para lidar com erros 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, './Routes/modelError.html'));
});

const port = 3080;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});