const mqtt = require('mqtt')
const { transaction } = require('./subscribes')

class MqttHandler {
    constructor() {
        this.host = process.env.MQTT_HOST
        this.port = 8883
        this.protocol = 'mqtts'
        this.username = process.env.MQTT_USERNAME // mqtt credentials if these are needed to connect
        this.password = process.env.MQTT_PASSWORD
    }

    connect() {
        // Conexão com o MQTT
        this.mqttClient = mqtt.connect(this.host, {
            username: this.username,
            password: this.password,
            host: this.host,
            port: this.port,
            protocol: this.protocol,
            reconnectPeriod: 5000 // Try reconnecting in 5 seconds if connection is lost
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
        this.mqttClient.subscribe('transaction', { qos: 0 })

        // Função executada quando uma mensagem chega
        this.mqttClient.on('message', function (topic, message) {
            switch (topic) {
                case 'transaction':
                    transaction(JSON.parse(message), this.mqttClient)
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
