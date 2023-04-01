const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Usuario = require('../models/user')
const { where } = require('sequelize')
class User {
    async register(name, cpf, birthday, email, password, address, city, state) {
        if (password) {
            var pass = await bcrypt.hash(password, 10)
        }

        //sequelize find user with email
        const user = await Usuario.findOne({ where: { email: email } })

        if (user) {
            throw new Error('email já cadastrado')
        }
        const newUser = new Usuario({
            nome: name,
            cpf: cpf,
            birthday: birthday,
            email: email,
            password: pass,
            address: address,
            city: city,
            state: state,
        })

        try {
            await newUser.save()
            return newUser
        } catch (err) {
            throw new Error('Email ou CPF já cadastrado')
        }
    }

    async Authentication(email, pass) {
        //Requisição de busca na tabela "users" para verificar a existência de um usuário com o email indicado no LOGIN
        const user = await Usuario.findOne({ where: { email: email } })

        if (user == null) {
            throw new Error('Email ou Senha inválidos')
        }

        if (user.length == 0) {
            throw new Error('Email ou Senha inválidos')
        }

        //Verificar se a senha inserida corresponde a do usuário
        let passwordMatch = await bcrypt.compare(pass, user.password)

        if (!passwordMatch) {
            throw new Error('Email ou Senha inválidos')
        }

        //Gera o token de segurança do usuário, que possui tempo de expiração
        let token

        token = jwt.sign(
            {
                email: user.email,
            },
            '4b0d30a9f642b3bfff67d0b5b28371a9',
            {
                subject: user.id.toString(),
                expiresIn: '1h',
            }
        )

        user.password = undefined
        return {
            message: 'Validated Credentials. User Logged',
            token: token,
            user,
        }
    }

    async getInfos(id) {
        const user = await Usuario.findOne({ where: { id }, attributes: { exclude: ['password'] } })

        if (user.length == 0) {
            throw new Error('Usuário não encontrado')
        }

        return user
    }
}

module.exports = {
    User,
}
