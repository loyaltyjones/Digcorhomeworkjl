// Dre
//   9:42 AM
// @channel Create a five day weather outlook for a city of your choice. The outlook should include the following:
// High Temp
// Low Temp
// Winds
// Rain Chance
// The day/date of the weather conditions
// Image representing one of the following conditions: sunny, partly cloudy, mostly cloudy, rainy, windy
// Each day should be stored in its own container. (edited) 

// --------------------------------------------------------------------------------
//function onloadCall(){
fetch("https://api.weatherapi.com/v1/forecast.json?q=30318&days=5&key=f9590783e4ed48ebb8d152028241803")
.then((response) => response.json())
.then((data) => {
    let weathercond = [];
    weathercond.push(data);
    //console.log(weathercond[0].location.name)
    //console.log(weathercond);
    //let weatherFinal = []
       // for(i = 0; i < weathercond[0].location.length; i++){
            let cityName = weathercond[0].location.name;
            console.log(cityName)           
//             //container
             let weatherContainer = document.createElement("div");
//             console.log("new created div:", weatherContainer)
//             // p-tags
            let cityNameTag = document.createElement("p");
//             //values(.innerText)
            cityNameTag.innerText =cityName;
//             //appendChild
            weatherContainer.appendChild(cityNameTag);
//             //console.log("div with p tags: ", weatherContainer);
             document.body.appendChild(weatherContainer);      
//         }
//        // console.log(data) 
 })

 //}


// onloadCall()



//data[1].current.temp_f
// {
//     location: {
//       name: 'Atlanta',
//       region: 'Georgia',
//       country: 'USA',
//       lat: 33.79,
//       lon: -84.44,
//       tz_id: 'America/New_York',
//       localtime_epoch: 1710810547,
//       localtime: '2024-03-18 21:09'
//     },
//     current: {
//       last_updated_epoch: 1710810000,
//       last_updated: '2024-03-18 21:00',
//       temp_c: 8.6,
//       temp_f: 47.5,
//       is_day: 0,
//       condition: {
//         text: 'Partly cloudy',
//         icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
//         code: 1003
//       },
//       wind_mph: 20.6,
//       wind_kph: 33.1,
//       wind_degree: 300,
//       wind_dir: 'WNW',
//       pressure_mb: 1016,
//       pressure_in: 30,
//       precip_mm: 0,
//       precip_in: 0,
//       humidity: 22,
//       cloud: 25,
//       feelslike_c: 5.2,
//       feelslike_f: 41.4,
//       vis_km: 16,
//       vis_miles: 9,
//       uv: 1,
//       gust_mph: 25.1,
//       gust_kph: 40.3
//     },
//     forecast: { forecastday: [ [Object], [Object], [Object], [Object], [Object] ] }
//   }