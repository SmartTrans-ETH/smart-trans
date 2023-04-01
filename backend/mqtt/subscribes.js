const trip = require('../controller/trip')
const { SmartTransContract } = require('../ethers')

const transaction = async (info, mqttClient) => {
    try {
        const smartTransContract = await SmartTransContract(info.mnemonic)
        const wallet = ethers.Wallet.fromMnemonic(info.mnemonic)

        const balanceOf = await  smartTransContract.balanceOf(wallet)
        
        if (balanceOf == 0) {
            return
        }

        mqttClient.publish("success", 1)

        smartTransContract.use()

        const trip = await trip.create_trip(info.user_id, info.station_id);

    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    transaction,
}
