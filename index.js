const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Adicione esta linha para fazer o parse do corpo da solicitação
const email = require('./Routes/emailRoutes');

app.use(bodyParser.urlencoded({ extended: false })); // Use o middleware bodyParser
app.use(express.static('PagLogin')); // Adicione esta linha para servir arquivos estáticos
app.use('/email', email);


// Rota para a página inicial
const path = require('path');

//Pagina Load (inicial)
app.get('/index.html', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

//Pagina de login
app.get('/paglogin', (req, res) => {
  const indexPath = path.join(__dirname, './PagLogin/paglogin.html');
  res.sendFile(indexPath);
});



// Inicialização do servidor
const port = 3030;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
