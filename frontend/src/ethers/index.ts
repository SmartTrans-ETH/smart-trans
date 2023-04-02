import { ethers } from 'ethers'
import smartTransJson from '../contracts/smartTrans.json'

export const SmartTransContract = async () => {
    const { REACT_APP_SMART_TRANS_ADDRESS } = process.env
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const contract = new ethers.Contract(REACT_APP_SMART_TRANS_ADDRESS!, smartTransJson.abi, signer)

    return contract
}
