# Sobre:

Este repositório contém o código-fonte da API back-end desenvolvida como desafio final para o curso da Rocketseat. A API é parte integrante do ecossistema do FoodExplorer, um restaurante inovador que busca proporcionar uma experiência gastronômica única.

# Tecnologias:

As seguintes tecnologias foram empregadas na criação deste projeto:

- Node.js: Ambiente de execução que permite os desenvolvedores usem JavaScript para criar aplicativos do lado do servidor.
- Javascript: Linguagem de programação de alto nível, orientada a objetos e de script.
- express: Framework web para Node.js, simplificando o desenvolvimento de aplicações web e APIs.
- express-async-errors: Tratamento eficiente de erros assíncronos.
- Nodemon: Ferramenta que monitora mudanças nos arquivos de um aplicativo Node.js e reinicia automaticamente o servidor sempre que ocorrem alterações.
- sqlite e sqlite3: Bancos de dados leves e eficientes para armazenamento de informações.
- knex: Construtor de consultas SQL para Node.js, facilitando a interação com bancos de dados.
- bcryptjs: Para segurança e criptografia de senhas.
- jsonwebtoken: Implementação de tokens JWT para autenticação segura.
- cookie-parser: Biblioteca para Node.js que facilita o gerenciamento de cookies em aplicativos da web..
- multer: Middleware para manipulação de dados de formulário, permitindo o envio de arquivos.
- cors: Facilitando a integração entre back-end e front-end.
- dotenv: Gerenciamento de variáveis de ambiente para configuração flexível
- pm2: Gerenciador de processos para Node.js, garantindo escalabilidade e estabilidade.

# Como utilizar:

Clone o projeto para o local desejado em seu computador.

# Informação importante:

- Por padrão o usuário criado, a role dele vem como "client", para testar a maioria das funcionalidades tem que mudar a role do usuário para "admin" manualmente no banco de dados.

# Executando o Back-end:

No BackEnd altere o nome do arquivo .env.example para .env e insira uma porta e um secret no arquivo vazio, como no exemplo abaixo:
AUTH_SECRET="default"
PORT="3333"

# Navegue até o diretório do BackEnd

# Instale as dependências necessárias:

npm install

# Rode as migrates

npm run migrate

# Agora inicie o servidor do BackEnd:

npm run dev

# LINK DO DEPLOY

https://api-foodexplorer-6buc.onrender.com
