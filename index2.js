// const express = require('express');
// const app = express();
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser'); // Adicione esta linha para fazer o parse do corpo da solicitação
// const fs = require('fs');

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static('PagLogin'));

// // Configuração do transporte
// const transport = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'renanlima2000.aer@gmail.com',
//     pass: 'uqwuwzfrwaedrojz',
//   }
// });


// // Rota para a página inicial
// const path = require('path');

// // Rota para a página inicial
// app.get('/index.html', (req, res) => {
//   const indexPath = path.join(__dirname, 'index.html');
//   res.sendFile(indexPath);
// });

// //Pagina de login
// app.get('/paglogin', (req, res) => {
//   const indexPath = path.join(__dirname, './PagLogin/paglogin.html');
//   res.sendFile(indexPath);
// });



// // Rota para enviar email
// app.post('/send-email', (req, res) => {
//     const { toEmail, nome, sobrenome } = req.body; // Obtenha o endereço de email do corpo da solicitação
  
//   const EmailWelcome = fs.readFileSync(__dirname + '/modelEmailWelcome.html', 'utf-8');
//   const personalizedEmailContent = EmailWelcome.replace('{{NOME}}', nome).replace('{{SOBRENOME}}', sobrenome);

//   const mailOptions = {
//     from: 'teste',
//     to: toEmail,
//     subject: 'Direction Pack',
//     html: personalizedEmailContent,
//   };

//   transport.sendMail(mailOptions)
//     .then(() => res.send('Enviado'))
//     .catch((err) => res.status(500).send('Erro: ' + err));
// });

// ///////////////////////////////////////////////////////////////////////////////

// app.post('/send-email-forgetpassword', (req, res) => {
//   const { toEmail, nome, sobrenome, senha } = req.body; // Obtenha o endereço de email do corpo da solicitação

// const EmailForgtePassword = fs.readFileSync(__dirname + '/modelEmailForgetPassword.html', 'utf-8');
// const personalizedEmailForgtePassword = EmailForgtePassword.replace('{{NOME}}', nome).replace('{{SOBRENOME}}', sobrenome)
// .replace('{{SENHA}}', senha);

// const mailOptions = {
//   from: 'teste',
//   to: toEmail,
//   subject: 'Direction Pack',
//   html: personalizedEmailForgtePassword,
// };

// transport.sendMail(mailOptions)
//   .then(() => res.send('Enviado'))
//   .catch((err) => res.status(500).send('Erro: ' + err));
// });


// // Inicialização do servidor
// const port = 3030;
// app.listen(port, () => {
//     console.log(`Servidor rodando na porta ${port}`);
// });

