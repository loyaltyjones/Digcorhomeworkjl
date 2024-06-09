import React from 'react'
import EthereumInmage from '../Images/Ethereum.png'

function Ethereum() {
  return (
    <div>
        <img className="ethereum" src={EthereumInmage} />
        <p>Ethereum is a decentralized blockchain with smart contract functionality. Ether (Abbreviation: ETH;[a]) is the native cryptocurrency of the platform. Among cryptocurrencies, ether is second only to bitcoin in market capitalization.[2][3] It is open-source software.

        Ethereum was conceived in 2013 by programmer Vitalik Buterin.[4] Additional founders of Ethereum included Gavin Wood, Charles Hoskinson, Anthony Di Iorio, and Joseph Lubin.[5] In 2014, development work began and was crowdfunded, and the network went live on 30 July 2015.[6] Ethereum allows anyone to deploy permanent and immutable decentralized applications onto it, with which users can interact.[7] Decentralized finance (DeFi) applications provide financial instruments that do not directly rely on financial intermediaries like brokerages, exchanges, or banks. This facilitates borrowing against cryptocurrency holdings or lending them out for interest.[8][9] Ethereum also allows users to create and exchange non-fungible tokens (NFTs), which are tokens that can be tied to unique digital assets, such as images. Additionally, many other cryptocurrencies utilize the ERC-20 token standard on top of the Ethereum blockchain and have utilized the platform for initial coin offerings.

        On 15 September 2022, Ethereum transitioned its consensus mechanism from proof-of-work (PoW) to proof-of-stake (PoS) in an upgrade process known as "the Merge". This has cut Ethereum's energy usage by 99%.[10] </p>
        <p>https://en.wikipedia.org/wiki/Ethereum</p>
            
    </div>
  )
}

export default Ethereum