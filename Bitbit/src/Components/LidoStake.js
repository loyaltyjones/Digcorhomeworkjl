import React from 'react'
import LidoImage from '../Images/LidoStakedEther.png'

function LidoStake() {
  return (
    <div>
        <img className="lido" src={LidoImage} />
        <p> Staked ether (stETH) is a cryptocurrency token that aims to represent an Ethereum token that is "staked" or deposited to support blockchain operations. The token is designed on Lido, a decentralized finance protocol.1

        Staked ether (stETH) was introduced in 2020 in anticipation of Ethereum's shift to the proof-of-stake consensus mechanism. It is designed to function as a liquidity token, where you can deposit your ETH into a smart contract on the Lido blockchain and receive an equal amount of stETH that can be traded, exchanged, borrowed against, or used for any other liquidity purposes.2</p>
        <p>https://www.investopedia.com/staked-ether-5496378</p>
        </div>
  )
}

export default LidoStake