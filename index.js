const express = require('express');
const app = express();
//const nodemailer = require('nodemailer');
const bodyParser = require('body-parser'); 
//const fs = require('fs');
const emailRoutes = require('./Routes/emailRoutes');

app.use('/email', emailRoutes);
app.post('/email/send-email-forgotpassword', emailRoutes);
app.post('/email/send-email-welcome', emailRoutes);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('PagLogin'));
app.use(express.static('PagLoad'));


const path = require('path');

// Rota para a load
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, './PagLoad/index.html');
  res.sendFile(indexPath);
});

app.get('/load', (req, res) => {
  const indexPath = path.join(__dirname, './PagLoad/index.html');
  res.sendFile(indexPath);
});


//Pagina de login
app.get('/login', (req, res) => {
  const indexPath = path.join(__dirname, './PagLogin/paglogin.html');
  res.sendFile(indexPath);
});

app.get('/PagMain/index.html', (req, res) => {
  const indexPath = path.join(__dirname, './PagHome/index.html');
  res.sendFile(indexPath);
});


// Inicialização do servidor
const port = 3080;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
