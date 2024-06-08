fetch("https://api.weatherapi.com/v1/forecast.json?q=30318&days=5&key=f9590783e4ed48ebb8d152028241803")
.then((response) => response.json())
.then((data) => {
    let weathercond = [];
    weathercond.push(data);

            let cityName = weathercond[0].location.name;
            //console.log(cityName)           
//             //container
            let weatherContainer = document.createElement("div");
//             // p-tags
            let cityNameTag = document.createElement("p");
//             //values(.innerText)
            cityNameTag.innerText =cityName;
//             //appendChild
            weatherContainer.appendChild(cityNameTag);
//             //console.log("div with p tags: ", weatherContainer);
             document.body.appendChild(weatherContainer);       
 })
 