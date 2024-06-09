import React from 'react'
// import "./App.css";
import { useEffect, useState } from "react";
 
function SearchQuery() {
    // Setting up the initial states using
    // react hook 'useState'
    const [search, setSearch] = useState("");
    const [crypto, setCrypto] = useState([]);

    
    useEffect(() => {
        const myHeaders = new Headers();
    myHeaders.append("x-access-token", "coinranking03c985ef5c1764ba8eddb3430da30957cd98bc3ccfbbca63");
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
        // Fetch data from the API
        fetch("https://api.coinranking.com/v2/coins?limit=100", requestOptions)
          .then(response => response.json())
          .then(res => {
            setCrypto(res.data.coins);
        });
    }, []);
 
    return (
        <div className="App">
            <h1>SearchQuery</h1>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            <table>
                <thead>
                    <tr>
                        <td>Rank</td>
                        <td>Name</td>
                        <td>Symbol</td>
                        <td>Market Cap</td>
                        <td>Price</td>
                        {/* <td>Available Supply</td> */}
                        {/* <td>Volume(24hrs)</td> */}
                    </tr>
                </thead>
                {/* Mapping all the cryptos */}
                <tbody>
                    {/* Filtering to check for the searched crypto */}
                    {crypto
                        .filter((val) => {
                            return val.name.toLowerCase().includes(search.toLowerCase());
                        }).map((val, id) => {
                            {/* .Object.values(test.data.coins).map */}
                            return (
                                <>
                                    <tr id={id}>
                                        <td className="rank">{val.rank}</td>
                                        <td className="logo">
                                            <a href={val.coinrankingUrl}>
                                                <img src={val.iconUrl} alt="logo" width="30px" />
                                            </a>
 
                                            <p>{val.name}</p>
 
                                        </td>
                                        <td className="symbol">{val.symbol}</td>
                                        <td>${val.marketCap}</td>
                                        <td>${val.price}</td>
                                        {/* <td>₹{val.price.toFixed(2)}</td> */}
                                        {/* <td>{val.availableSupply}</td> */}
                                        {/* <td>{val.volume}</td> */}
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
 




export default SearchQuery