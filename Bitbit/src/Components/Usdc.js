import React from 'react'
import UsdcImage from "../Images/usdc.png";

function Usdc() {
  return (
    <div>
        <img className="usdc" src={UsdcImage} />
        <p>USD Coin (USDC) is an asset backed stablecoin whose value is pegged to the U.S. Dollar (USD). 
 

 Every USDC token in circulation is backed by $1 USD in cash or cash equivalents, such as short-term U.S. Treasury bonds held by regulated U.S. financial institutions. USDC has adopted the ERC-20 token standard, making it interoperable with all Ethereum-based applications. The token is now found on many other popular blockchains including Algorand, Solana and Tron. 
 
 The price predictability of USDC has allowed it to serve as a safe haven for cryptocurrency traders during periods of market volatility. USDC also enables a more efficient transaction of value in a stable digital currency across borders than has been the norm from traditional finance. 
 
 USDC’s utility is underscored by its extensive ecosystem of holders and service providers such as decentralized applications (dApps) and crypto exchanges.</p>
 <p>https://www.kraken.com/learn/what-is-usd-coin-usdc</p>
    </div>
  )
}

export default Usdc