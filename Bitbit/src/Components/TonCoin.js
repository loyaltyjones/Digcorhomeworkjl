import React from 'react'
import TonImage from "../Images/toncoin.png";

function TonCoin() {
  return (
    <div>
        <img className="toncoin" src={TonImage} />
        <p>The Open Network (previously Telegram Open Network,[1] both abb. as TON) is a decentralized computer network[2] consisting of a layer-1 blockchain with various components. TON was originally developed by Nikolai Durov and the messaging platform, Telegram and now embraced by a global community of independent contributors.
        In 2017–2018, the Telegram Messenger team is starting to explore blockchain solutions for themselves. Finding no current Layer 1 blockchain able to support Telegram's 9-figure userbase, they decide to design their own layer-1 chain, then called Telegram Open Network.[3]

        To obtain the resources required to make TON a reality, Telegram launched a Gram token (later renamed Toncoin)[1] sale in Q1 2018.[4] Durov considered venture capital financing but decided against it.

        According to documents related to the U.S. Securities and Exchange Commission (SEC) v. Telegram suit (2020), by 2017, the self-funded startup needed money to pay for servers and services.[citation needed] Funds raised during the Telegram ICO were planned to be used for the development of Telegram and TON and for the ongoing expenses required to support the growth of the ecosystem. More than 80 percent of collected funds planned to be spent on equipment, bandwidth, colocation, and user verification costs. The rest planned to be allocated for wages, offices, and legal and consulting services.[5] </p>
        <p>https://en.wikipedia.org/wiki/The_Open_Network</p>
    </div>
  )
}

export default TonCoin