// Imports
require("dotenv").config(); // Biblioteca para separar dados sensíveis em variáveis de ambiente
const express = require("express"); // Biblioteca para criação de rotas e APIs
const mongoose = require("mongoose"); // Biblioteca de modelagem de objetos do MongoDB
const bcrypt = require("bcrypt"); // Biblioteca para criptografia de senhas
const jwt = require("jsonwebtoken"); // Biblioteca para criação de tokens de autenticação

const app = express();

// Models
const User = require("./models/User"); // Importação do modelo de usuário

// Configuração para o json
app.use(express.json()); // Adiciona middleware para interpretação do corpo das requisições em formato JSON

/* Endpoint público */
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo a API!" }); // Retorna mensagem de boas-vindas ao acessar a raiz da API
});

/* Endpoint privado */
app.get("/user/:id", checkToken, async (req, res) => {
  const id = req.params.id;

  // Checar se o usuário existe
  const user = await User.findById(id, "-password"); // Busca um usuário pelo ID, excluindo o campo de senha

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" }); // Retorna mensagem de erro caso o usuário não exista
  }

  res.status(200).json({ user }); // Retorna o usuário encontrado
});

// Função para checar token de autenticação
function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"]; // Obtém o header de autorização
  const token = authHeader && authHeader.split(" ")[1]; // Obtém o token de autorização a partir do header

  if (!token) return res.status(401).json({ msg: "Acesso negado!" }); // Retorna mensagem de erro caso o token não seja fornecido

  try {
    const secret = process.env.SECRET; // Obtém a chave secreta para verificação do token

    jwt.verify(token, secret); // Verifica se o token é válido

    next(); // Permite que a requisição continue caso o token seja válido
  } catch (err) {
    res.status(400).json({ msg: "O Token é inválido!" }); // Retorna mensagem de erro caso o token seja inválido
  }
}

/* Método Post */
app.post("/auth/register", async (req, res) => {
  const { name, email, password, confirmpassword } = req.body; // Obtém dados do usuário a partir do corpo da requisição

  // Validações de campos
  if (!name) {
    return res.status(422).json({ msg: "O nome é obrigatório!" }); // Retorna mensagem de erro caso o nome não seja fornecido
  }

  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" }); // Retorna mensagem de erro caso o email não seja fornecido
  }

  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatória!" }); // Retorna mensagem de erro caso a senha não seja fornecida
  }

  if (password != confirmpassword) {
    return res
      .status(422)
      .json({ msg: "A senha e a confirmação precisam ser iguais!" });
  }

  // Verifica se o usuário existe
const userExists = await User.findOne({ email: email });

if (userExists) {
// Retorna um erro se o usuário já existe
return res.status(422).json({ msg: "Por favor, utilize outro e-mail!" });
}

// Cria uma senha
const salt = await bcrypt.genSalt(12);
const passwordHash = await bcrypt.hash(password, salt);

// Cria um usuário
const user = new User({
name,
email,
password: passwordHash, //Onde ocorreu o erro
});

try {
  // Salva o usuário no banco de dados
  await user.save();
  // Retorna um sucesso após salvar o usuário
  res.status(201).json({ msg: "Usuário criado com sucesso!" });
} catch (error) {
  // Retorna um erro caso ocorra um problema ao salvar o usuário
  res.status(500).json({ msg: error });
}
});

//Endpoint login
app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;
  
    // validations
    if (!email) {
      return res.status(422).json({ msg: "O email é obrigatório!" });
    }
  
    if (!password) {
      return res.status(422).json({ msg: "A senha é obrigatória!" });
    }
  
    // check if user exists
    const user = await User.findOne({ email: email });
  
    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }
  
    // check if password match
    const checkPassword = await bcrypt.compare(password, user.password);
  
    if (!checkPassword) {
      return res.status(422).json({ msg: "Senha inválida" });
    }
  
    try {
      const secret = process.env.SECRET;
  
      const token = jwt.sign(
        {
          id: user._id,
        },
        secret
      );
  
      res.status(200).json({ msg: "Autenticação realizada com sucesso!", token });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  });

/* Conexao com o banco */

// Constantes puxando informacao do .env com informacoes sensiveis
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.7znqo79.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    // Imprime uma mensagem de sucesso ao conectar ao banco de dados
    console.log("Conectou ao banco!");
    // Inicia o servidor na porta 3000
    app.listen(3000);
  })
  .catch((err) => console.log(err));