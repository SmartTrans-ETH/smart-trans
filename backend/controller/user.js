const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Usuario = require("../models/user");
const { where } = require("sequelize");
const moment = require("moment");
class User {
  async register(
    nome,
    cpf,
    birthday,
    email,
    password,
    address,
    city,
    state,
    wallet
  ) {
    if (password) {
      var pass = await bcrypt.hash(password, 10);
    }

    //sequelize find user with email
    const user = await Usuario.findOne({ where: { email: email } });

    if (user) {
      throw new Error("Email já cadastrado");
    }

    const userFromCpf = await Usuario.findOne({ where: { cpf: cpf } });
    if (userFromCpf) {
      throw new Error("CPF já cadastrado");
    }

    const newUser = new Usuario({
      nome,
      cpf,
      birthday,
      email,
      password: pass,
      address,
      city,
      state,
      wallet,
    });

    try {
      const createdUser = await newUser.save();
      const token = jwt.sign(
        {
          email: createdUser.email,
        },
        process.env.JWT_SECRET,
        {
          subject: createdUser.id.toString(),
          expiresIn: "1h",
        }
      );
      return { user: createdUser, token };
    } catch (err) {
      throw err;
    }
  }

  async Authentication(email, pass) {
    //Requisição de busca na tabela "users" para verificar a existência de um usuário com o email indicado no LOGIN
    const user = await Usuario.findOne({ where: { email: email } });

    if (user == null) {
      throw new Error("Email ou Senha inválidos");
    }

    if (user.length == 0) {
      throw new Error("Email ou Senha inválidos");
    }

    //Verificar se a senha inserida corresponde a do usuário
    let passwordMatch = await bcrypt.compare(pass, user.password);

    if (!passwordMatch) {
      throw new Error("Email ou Senha inválidos");
    }

    //Gera o token de segurança do usuário, que possui tempo de expiração
    let token;

    token = jwt.sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id.toString(),
        expiresIn: "1h",
      }
    );

    user.password = undefined;
    return {
      message: "Validated Credentials. User Logged",
      token: token,
      user,
    };
  }

  async getInfos(id) {
    let user = await Usuario.findOne({
      where: { id },
      attributes: { exclude: ["password"] },
    });

    if (user.length == 0) {
      throw new Error("Usuário não encontrado");
    }
    user = {
      ...user,
      birthday: moment(Date(user["birthday"])).format("DD/MM/YYYY"),
    };
    return user;
  }
}

module.exports = {
  User,
};
