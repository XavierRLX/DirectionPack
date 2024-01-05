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

app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, './html/load.html');
  res.sendFile(indexPath);
});

app.get('/load', (req, res) => {
  const indexPath = path.join(__dirname, './html/load.html');
  res.sendFile(indexPath);
});

app.get('/login', (req, res) => {
  const indexPath = path.join(__dirname, './html/paglogin.html');
  res.sendFile(indexPath);
});

app.get('/html/home.html', (req, res) => {
  const indexPath = path.join(__dirname, './html/home.html');
  res.sendFile(indexPath);
});

app.get('/home', (req, res) => {
  const indexPath = path.join(__dirname, './html/home.html');
  res.sendFile(indexPath);
});


// Middleware para lidar com erros 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, './Routes/modelError.html'));
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).sendFile(path.join(__dirname, './Routes/modelError.html'));
});


const port = 3080;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
