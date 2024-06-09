
import React, { useState, useEffect } from 'react';

const TestFef = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
myHeaders.append("x-access-token", "coinranking03c985ef5c1764ba8eddb3430da30957cd98bc3ccfbbca63");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};
    // Fetch data from the API
    fetch("https://api.coinranking.com/v2/coins", requestOptions)
      .then(response => response.json())
      .then(results => {

        const loopInfo = []
        const keys = results.data.coins
        for( let i = 0; i < keys.length; i++){
            // const key = keys[i];
            const rank = results.data.coins[i].rank;
            const symbol = results.data.coins[i].symbol;
            const price = results.data.coins[i].price;
            const name = results.data.coins[i].name;
            console.log(` Rank: ${rank} Symbol: ${symbol} Name: ${name} Price: ${price}`);
            loopInfo.push(` Rank: ${rank} Symbol: ${symbol} Name: ${name} Price: ${price} `)
        // Store the fetched data in component state
        setData(loopInfo);
        console.log(data)
 
        }





      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div>
      <h1>Data from API:</h1>
      <h>{}</h>
      <ul>
        {/* Map through the data and render each item */}
        {data.map((item, index) => (
          <div className='api' key={index}>{item}</div>
        ))}
      </ul>

     
  
     </div>
    
  );
};

export default TestFef;


