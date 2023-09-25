// app/email/index.js

const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

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

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Erro interno do servidor');
});

// Função para enviar emails
const sendEmail = async (toEmail, subject, htmlContent) => {
  try {
    const mailOptions = {
      from: 'teste',
      to: toEmail,
      subject: subject,
      html: htmlContent,
    };

    await transport.sendMail(mailOptions);
  } catch (err) {
    throw err;
  }
};

// Rota para enviar email de boas-vindas
app.post('/send-email-welcome', async (req, res, next) => {
  try {
    const { toEmail, nome, sobrenome } = req.body;

    const EmailWelcome = fs.readFileSync(__dirname + '/ModelsEmails/modelEmailWelcome.html', 'utf-8');
    const personalizedEmailContent = EmailWelcome.replace('{{NOME}}', nome).replace('{{SOBRENOME}}', sobrenome);

    await sendEmail(toEmail, 'Direction Pack - Bem-vindo', personalizedEmailContent);

    res.send('Enviado');
  } catch (err) {
    next(err);
  }
});

// Rota para enviar email de recuperação de senha
app.post('/send-email-forgotpassword', async (req, res, next) => {
  try {
    const { toEmail, nome, sobrenome, senha } = req.body;

    const EmailForgotePassword = fs.readFileSync(__dirname + '/ModelsEmails/modelEmailForgotPassword.html', 'utf-8');
    const personalizedEmailForgotePassword = EmailForgotePassword.replace('{{NOME}}', nome).replace('{{SOBRENOME}}', sobrenome)
      .replace('{{SENHA}}', senha);

    await sendEmail(toEmail, 'Direction Pack - Recuperação de Senha', personalizedEmailForgotePassword);

    res.send('Enviado');
  } catch (err) {
    next(err);
  }
});

module.exports = app;
