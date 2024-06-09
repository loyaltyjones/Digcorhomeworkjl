import React from 'react'
import Bitcoin from './Bitcoin'
import BNB from './BNB'
import Ethereum from './Ethereum'
import DogeCoin2 from './DogeCoin2'
import LidoStake from './LidoStake'
import Solana from './Solana'
import TetherUSD from './TetherUSD'
import TonCoin from './TonCoin'
import Usdc from './Usdc'
import Xrp from './Xrp'



function Blogs() {
  return (
    <div className='blogs'>
    <h1>LEARN THE TOP 10 COINS</h1>
    <Bitcoin />
        <BNB />
        <Ethereum />
        <DogeCoin2 />
        <LidoStake />
        <Solana />
        <TetherUSD />
        <TonCoin />
        <Usdc />
        <Xrp />
    </div>
  )
}

export default Blogs