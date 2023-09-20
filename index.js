const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser'); // Adicione esta linha para fazer o parse do corpo da solicitação
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false })); // Use o middleware bodyParser
app.use(express.static('PagLogin')); // Adicione esta linha para servir arquivos estáticos

// Configuração do transporte
const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'renanlima2000.aer@gmail.com',
    pass: 'uqwuwzfrwaedrojz',
  }
});



// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile('index.html');
  });




// Rota para enviar email
app.post('/send-email', (req, res) => {
    const { toEmail, nome, sobrenome } = req.body; // Obtenha o endereço de email do corpo da solicitação
  
  const EmailWelcome = fs.readFileSync(__dirname + '/modelEmailWelcome.html', 'utf-8');
  const personalizedEmailContent = EmailWelcome.replace('{{NOME}}', nome).replace('{{SOBRENOME}}', sobrenome);

  const mailOptions = {
    from: 'teste',
    to: toEmail,
    subject: 'Direction Pack',
    html: personalizedEmailContent,
  };

  transport.sendMail(mailOptions)
    .then(() => res.send('Enviado'))
    .catch((err) => res.status(500).send('Erro: ' + err));
});

///////////////////////////////////////////////////////////////////////////////

app.post('/send-email-forgetpassword', (req, res) => {
  const { toEmail, nome, sobrenome, senha } = req.body; // Obtenha o endereço de email do corpo da solicitação

const EmailForgtePassword = fs.readFileSync(__dirname + '/modelEmailForgetPassword.html', 'utf-8');
const personalizedEmailForgtePassword = EmailForgtePassword.replace('{{NOME}}', nome).replace('{{SOBRENOME}}', sobrenome)
.replace('{{SENHA}}', senha);

const mailOptions = {
  from: 'teste',
  to: toEmail,
  subject: 'Direction Pack',
  html: personalizedEmailForgtePassword,
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
