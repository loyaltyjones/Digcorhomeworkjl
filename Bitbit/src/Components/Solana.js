import React from 'react'
import SolanaImage from "../Images/Solana.png";

function Solana() {
  return (
    <div>
        <img className="solana" src={SolanaImage} />
        <p>In August 2021, prices for SOL — the cryptocurrency that helps power the smart-contract-compatible Ethereum competitor Solana — suddenly spiked from around $30 at the beginning of the month to around $75 three weeks in, drawing mainstream attention to the altcoin. 

        SOL got a boost from one of the biggest crypto trends of the summer: the launch of a primate-themed NFT collectible project. Specifically, the Degenerate Ape Academy NFTs, the first major NFT project to launch on the Solana blockchain. But what exactly is Solana? 

        Like Ethereum, Solana is both a cryptocurrency and a flexible platform for running crypto apps — everything from Degenerate Apes to the Serum decentralized exchange (or DEX). Its major innovation is speed, via a bundle of new technologies including a consensus mechanism called proof of history. Solana can process around 50,000 transactions per second — compared to 15 or less for Ethereum (the ETH2 upgrade, which is currently underway, is designed to make Ethereum much faster than it is now).

        Because Solana is so fast, congestion and fees remain low. Developers hope high speeds and low fees will eventually enable Solana to scale to compete with centralized payment processors like Visa. 

        Solana’s native cryptocurrency is SOL. It’s used to pay transaction fees and for staking. SOL is available to buy and sell via exchanges like Coinbase. </p>
        <p>https://www.coinbase.com/learn/crypto-basics/what-is-solana</p>
    </div>
  )
}

export default Solana