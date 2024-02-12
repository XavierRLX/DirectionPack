# DirectionPack

Principais configurações em node.js:

Configuração Inicial:

Importações de módulos necessários, como express, nodemailer, fs, e body-parser.
Inicialização de um aplicativo Express.
Configuração do Nodemailer:

Criação de um transporte para enviar e-mails usando o serviço SMTP do Gmail.

Middleware de Tratamento de Erros:

Definição de um middleware para lidar com erros internos do servidor. Se houver um erro, retorna uma resposta de status 500.
Definição de Rotas:

Roteamento estático para servir arquivos JavaScript, CSS e imagens estáticas.
Roteamento dinâmico para várias páginas HTML com base em uma matriz de objetos de rota. Cada rota é definida para enviar um arquivo HTML correspondente.
Middleware para Lidar com Erros 404:

Um middleware final é definido para lidar com solicitações para rotas não encontradas, retornando uma página de erro 404.
Início do Servidor:

O servidor Express é configurado para ouvir na porta 3080. Quando o servidor é iniciado, uma mensagem de console é exibida indicando a porta em que está sendo executado.
Definição das Rotas de E-mail:

Um novo aplicativo Express é inicializado para lidar com as rotas relacionadas ao envio de e-mails.
São definidas duas rotas POST: uma para enviar e-mails de boas-vindas e outra para enviar e-mails de recuperação de senha.
Dentro de cada rota, os dados do formulário são extraídos, modelos de e-mail são carregados e preenchidos com os dados fornecidos e, em seguida, os e-mails são enviados usando o Nodemailer.
Os erros são tratados usando o middleware de tratamento de erros definido anteriormente.
Exportação do Aplicativo:

O aplicativo Express que lida com as rotas de e-mail é exportado para ser usado em outros arquivos.
Resumo das principais partes do código JavaScript:

Gerenciamento de usuários:

Validação de formulário de registro: Garante que os dados inseridos sejam válidos, verificando nomes, sobrenomes, nomes de usuário, emails e senhas.
Armazenamento de usuários no localStorage: Salva as informações dos usuários no navegador, permitindo a persistência de dados.
Carregamento de usuários no início da página: Recupera os dados dos usuários do localStorage ao carregar a página.
Busca de endereço por CEP:

Validação de CEP: Verifica se o CEP digitado é válido para o Brasil.
Busca de endereço por API: Utiliza a API ViaCEP para buscar os dados de endereço correspondentes ao CEP digitado.
Atualização dos campos de endereço: Preenche os campos de estado, código de área, cidade, bairro e rua com as informações obtidas da API.
Autenticação e login:

Verificação de login: Checa se o usuário está logado usando o localStorage.
Redirecionamento para login: Redireciona o usuário para a página de login caso não esteja logado.
Mensagem de boas-vindas: Exibe uma mensagem personalizada com o nome completo do usuário após o login.
Logout: Remove as informações de login do localStorage e redireciona para a página de login.
