const mqtt = require('mqtt')
const { SmartTransContract } = require('../ethers')
const { ethers } = require('ethers')
const trip = require('../controller/trip')

class MqttHandler {
    constructor() {
        this.host = process.env.MQTT_HOST
        this.port = 8883
        this.protocol = 'mqtts'
        this.username = process.env.MQTT_USERNAME // mqtt credentials if these are needed to connect
        this.password = process.env.MQTT_PASSWORD
    }

    async transfer(info) {
        try {
            const smartTransContract = await SmartTransContract(process.env.MNEMONIC)
            const wallet = ethers.Wallet.fromMnemonic(info[0])
            const balanceOf = await smartTransContract.balanceOf(wallet.address)
           
            if (balanceOf.toNumber() == 0) {
                this.mqttClient.publish('response', '0')
                console.log("Usuário sem cotas o suficiente!")
                return
            }
            this.mqttClient.publish('response', '1')
            console.log(wallet.address)
            const tx = await smartTransContract.use(wallet.address)
            await tx.wait()

            await trip.create_trip(parseInt(info[1]), info[2])
            console.log("Sucesso!")
        } catch (err) {
            console.log(err)
        }
    }

    connect() {
        // Conexão com o MQTT
        this.mqttClient = mqtt.connect(this.host, {
            username: this.username,
            password: this.password,
            host: this.host,
            port: this.port,
            protocol: this.protocol,
            reconnectPeriod: 5000, // Try reconnecting in 5 seconds if connection is lost
        })

        // Caso a conexão falhe
        this.mqttClient.on('error', (err) => {
            console.log(err)
            this.mqttClient.end()
        })

        // Caso a conexão seja bem sucedida
        this.mqttClient.on('connect', () => {
            console.log(`Conexão com o MQTT bem sucedida!`)
        })

        // Escutar pelo tópico /location
        this.mqttClient.subscribe('transfer', { qos: 0 })
        // const parsedMsg = [process.env.MNEMONIC, 1, 1]
        // this.transfer(parsedMsg)

        const scope = this
        // Função executada quando uma mensagem chega
        this.mqttClient.on('message', function (topic, message) {
            const msg = message.toString()
            const parsedMsg = msg.split(', ')
           
            switch (topic) {
                case 'transfer':
                    scope.transfer(parsedMsg)
                    break
            }
        })

        // Desconectar do MQTT
        this.mqttClient.on('close', () => {
            console.log(`Desconectado do MQTT`)
        })
    }
}

module.exports = MqttHandler
