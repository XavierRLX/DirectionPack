const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser'); // Adicione esta linha para fazer o parse do corpo da solicitação
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false })); // Use o middleware bodyParser
app.use(express.static('testEmail')); // Adicione esta linha para servir arquivos estáticos

// Configuração do transporte
const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'renanlima2000.aer@gmail.com',
    pass: '#',
  }
});

// Rota para a página inicial

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/testEmail/teste.html');
  });

// Rota para enviar email
app.post('/send-email', (req, res) => {
    const { toEmail } = req.body; // Obtenha o endereço de email do corpo da solicitação
  
    const emailContent = fs.readFileSync(__dirname + '/modelemail.html', 'utf-8');

    const mailOptions = {
      from: 'teste',
      to: toEmail, // Use 'to' em vez de 'mailOptions'
      subject: 'Enviado com nodemailer',
      html: emailContent,
     // text: 'teste',
    };

  transport.sendMail(mailOptions)
    .then(() => res.send('Enviado'))
    .catch((err) => res.status(500).send('Erro: ' + err));
});

// Inicialização do servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
