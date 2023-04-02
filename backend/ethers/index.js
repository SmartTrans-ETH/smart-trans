const  {ethers} = require('ethers')
const smartTransJson = require('../contracts/smartTrans.json')

const SmartTransContract = async (mnemonic) => {
    const {  SMART_TRANS_ADDRESS } = process.env
    const provider = new ethers.providers.JsonRpcProvider('https://alfajores-forno.celo-testnet.org/')
    const wallet = ethers.Wallet.fromMnemonic(mnemonic)
    const connectedWallet = wallet.connect(provider)
    
    const contract = new ethers.Contract(SMART_TRANS_ADDRESS, smartTransJson.abi, connectedWallet)

    return contract
}

module.exports = { SmartTransContract }
