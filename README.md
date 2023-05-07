<h1>API RESTful em NODEJS com JWT e MongoDB</h1>
<h2> Arquivo de Documentação </h2>

> API desenvolvida para intuitos pessoais e para aplicação em uma vaga de engenheiro de software jr. A presente criação desse projeto contempla conhecimentos em Javascript, Node, Express, MongoDB, JWT, Bcrypt, PostMan, Git e Engenharia de software. A presente API é capaz de registrar usuários, autentica-los, recuperar suas senhas, validação através de rotas e uma rota pública para acesso aberto.

### IDE
- Visual Studio Code

### Tecnologias utilizadas
- Javascript
- Node.JS
- Express
- JWT (Json Web Token)
- MongoDB

### Bibliotecas utilizadas
- Mongoose
- Bcrypt 
- DotEnv

### Pequenos atachments
- Nodemon: Utilizado para atualização automatica do servidor.

###Justificativa de escolha das tecnologias
- Node.js: escolhido por ser uma plataforma de desenvolvimento em JavaScript no lado do servidor, com uma ampla comunidade e muitas bibliotecas disponíveis para diferentes fins.
- Express.js: um framework web para Node.js que facilita a criação de rotas, middlewares e outras funcionalidades para aplicativos web, além de ter uma sintaxe simples e intuitiva.

- MongoDB Atlas: escolhido por ser um banco de dados NoSQL orientado a documentos, o que permite uma maior flexibilidade de esquema e uma integração mais fácil com o JavaScript, além de ter um desempenho melhor em muitas situações em comparação com bancos de dados relacionais tradicionais.

- Mongoose: uma biblioteca para Node.js que fornece uma camada de abstração sobre o MongoDB, tornando mais fácil a criação de modelos, consultas, validações e outros aspectos do acesso ao banco de dados. A versão escolhida em questão foi o mongodb atlas que trata-se de um serviço de hospedagem em nuvem do MongoDB que oferece alta disponibilidade, escalabilidade e segurança para seus bancos de dados.

- JWT: um padrão de token de autenticação usado para identificar usuários e permitir o acesso a recursos restritos em aplicativos web. É uma escolha comum devido à sua simplicidade e à sua capacidade de trabalhar com qualquer linguagem ou plataforma.

- Bcrypt: uma biblioteca para Node.js que fornece funções de hash e de comparação de senhas, usada para armazenar senhas com segurança no banco de dados. É uma escolha comum devido à sua segurança comprovada e à sua facilidade de uso.

- DotEnv: A escolha de utilizar a lib dotenv é importante para evitar que informações confidenciais como credenciais de banco de dados e chaves de API sejam compartilhadas ou expostas publicamente no repositório de código. O dotenv permite que essas informações sejam armazenadas em um arquivo de configuração separado e seguro, que não será versionado ou compartilhado com outras pessoas. Dessa forma, garante-se a segurança dos dados e a privacidade do usuário.

### Ajustes e melhorias
O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [ ] Adicionar validações de entrada de dados
- [ ] Implementar testes automatizados
- [ ] Adicionar autenticação via OAuth2.

### Técnicas de programação aplicadas no projeto.
- Eu utilizei o padrão de arquitetura MVC para organizar meu código em modelos, visões e controladores.
- Eu implementei a autenticação de usuários utilizando JWT, que é uma técnica de autenticação stateless.
- Eu utilizei a biblioteca bcrypt para a criptografia de senhas dos usuários, tornando as informações mais seguras.
- Implementei o uso de middlewares, que é uma técnica para separar as camadas da aplicação, tornando o código mais organizado.
- Utilizei o framework Express para facilitar a criação e gerenciamento de rotas da aplicação.
- Para armazenar as informações dos usuários, utilizei o banco de dados NoSQL MongoDB, que é escalável e de fácil manutenção.
- Utilizei a biblioteca Mongoose para conectar minha aplicação ao MongoDB, facilitando a manipulação e consulta dos dados.
- Utilizei a biblioteca dotenv para proteger informações confidenciais, como chaves de API, evitando a exposição acidental de informações sensíveis.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você instalou a versão mais recente `<Node.js na versão 16.13.2 ou superior>`
* Você precisa ter em sua máquina `<Visual Studio Code 1.57.0 ou superior>`
* Você tem uma máquina `<Windows / Linux / Mac>`. Todos os sistemas operacionais são compatíveis, aqui será demonstrado a instalação em uma máquina Windows.
* Caso sua máquina seja Linux ou Mac, Seguem alguns manuais de instalações: 
`<https://www.youtube.com/watch?v=CTt07TxThIU>`.

## 🚀 Instalando e utilizando a aplicação

• Para instalar o projeto, siga estas etapas:

• Instale o Node.js em sua máquina, utilizando a versão mais recente disponível.

• Baixe e descompacte o projeto em seu computador.

• Abra o Visual Studio Code e abra a pasta do projeto.

• Abra o terminal integrado no Visual Studio Code e navegue até a pasta do projeto.

• Execute o comando npm install para instalar todas as dependências do projeto.

• Execute o comando npm run dev para iniciar o servidor utilizando o Nodemon.

• Acesse o servidor através do navegador, digitando http://localhost:3000 na barra de endereços.

• Além disso, é importante ressaltar que as dependências do projeto são: bcrypt, dotenv, express, jsonwebtoken e mongoose, e que o nodemon é uma dependência de desenvolvimento. Por exemplo, você pode executar os seguintes comandos:
```
<npm install bcrypt dotenv express jsonwebtoken mongoose>
```

```
<npm install --save-dev nodemon>
```

### Prints de funcionamento
https://drive.google.com/drive/folders/1dhoVBJODmRurxjadleuZ3ViH0LJSWlT5?usp=sharing

## 📫 Deseja contribuir para o projeto?
Para contribuir com o projeto, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <API_NODEJS_JWT_MONGODB_> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

[⬆ Voltar ao topo](#nome-do-projeto)<br>
