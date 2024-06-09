import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { setSearchBarContext } from './Searchbar';



function Table() {
  //Context from Searchbar component which was passed in as value in <setSearchBarContext.Provider value={search}> from const [search, setSearch] = useState("") 
const searchInput = useContext(setSearchBarContext)
const [crypto, setCrypto] = useState([]);
console.log(searchInput)

useEffect(() => {
    
const myHeaders = new Headers();
myHeaders.append("x-access-token", "coinranking03c985ef5c1764ba8eddb3430da30957cd98bc3ccfbbca63");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

// fetch("https://api.coinranking.com/v2/coins", requestOptions)
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

fetch("https://api.coinranking.com/v2/coins", requestOptions)
  .then(response => response.json())
  .then(result => {
 setCrypto(result);
})
// console.log(result)
  .catch((error) => console.error(error));


        // fetch(`https://crypto-market-prices.p.rapidapi.com/tokens/BTC?base=USDT`)

        // .then(response => response.json())
        // .then(data => {
            // setCrypto(data);
        // })
     
},[])

  return (
    <div>
         <table className='tabStyle'>
                <thead>
                    <tr>
                        <td>Rank</td>
                        <td>Name</td>
                        <td>Symbol</td>
                        <td>Price</td>                 
                    </tr>
                </thead>
                    {/* Mapping all the cryptos */}
                    <tbody>
                    {/* Filtering to check for the searched crypto */}
                    {crypto
                        .filter((val) => {
                            return val.name.toLowerCase().includes(searchInput.toLowerCase());
                        })
                        .map((val, id) => {
                            return (
                                <>
                                    <tr id={id}>
                                        <td className="rank">{val.tier}</td>
                                        <td className="logo">
                                            <a href={val.websiteUrl}>
                                                <img src={val.iconUrl} alt="logo" width="30px" />
                                            </a>
 
                                            <p>{val.name}</p>
 
                                        </td>
                                        <td className="symbol">{val.symbol}</td>
                                        {/* <td>₹{val.marketCap}</td> */}
                                        <td>₹{val.price.toFixed(2)}</td>
                                        <td>{val.availableSupply}</td>
                                        {/* <td>{val.volume.toFixed(0)}</td> */}
                                    </tr>
                                </>
                            );
                        })}
                </tbody>
            </table>
        </div>
);
  

}


export default Table