import React from 'react'
import TetherImage from "../Images/tetherusd.png";
function TetherUSD() {
  return (
    <div>
        <img className="tether" src={TetherImage} />
        <p>Tether (USDT) is an Ethereum token that is pegged to the value of a U.S. dollar (also known as a stablecoin). Tether’s issuer claims that USDT is backed by bank reserves and loans which match or exceed the value of USDT in circulation. Important note: at this time, Coinbase only supports USDT on the Ethereum blockchain (ERC-20). Do not send USDT on any other blockchain to Coinbase.
        USDT, or Tether, belongs to a fast-growing type of cryptocurrency called stablecoins which avoid the extreme volatility of untethered cryptocurrencies, most commonly by tying their values to the price of a traditional currency like the U.S. dollar.

        Tether was launched as RealCoin in July 2014 and was rebranded as Tether (USDT) in November 2014. Originally based on the Bitcoin blockchain, Tether now supports Bitcoin's Omni and Liquid protocols as well as the Ethereum, Avalanche, Kava, Polka, TRON, EOS, Algorand, and Solana blockchains.3

        Tether also issues tokens pegged to the euro, the offshore Chinese yuan, the Mexican peso, and gold, none with more than a fraction of the market cap of its U.S. dollar-pegged USDT tokens.456</p>
        <p>https://www.investopedia.com/terms/t/tether-usdt.asp</p>
    </div>
  )
}

export default TetherUSD