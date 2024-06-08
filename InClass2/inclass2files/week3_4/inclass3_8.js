// {
//     "data": {
//         "timelines": {}
//             {
//                 "timestep": "1h",
//                 "endTime": "2024-03-08T21:00:00Z",
//                 "startTime": "2024-03-08T15:00:00Z",
//                 "intervals": [
//                     {
//                         "startTime": "2024-03-08T15:00:00Z",
//                         "values": {
//                             "temperature": 45.5
//                         }
//                     },
//                     {
//                         "startTime": "2024-03-08T16:00:00Z",
//                         "values": {
//                             "temperature": 45.94
//                         }
//                     },
//                     {
//                         "startTime": "2024-03-08T17:00:00Z",
//                         "values": {
//                             "temperature": 47.43
//                         }
//                     },
//                     {
//                         "startTime": "2024-03-08T18:00:00Z",
//                         "values": {
//                             "temperature": 49.12
//                         }
//                     },
//                     {
//                         "startTime": "2024-03-08T19:00:00Z",
//                         "values": {
//                             "temperature": 50.15
//                         }
//                     },
//                     {
//                         "startTime": "2024-03-08T20:00:00Z",
//                         "values": {
//                             "temperature": 50.31
//                         }
//                     },
//                     {
//                         "startTime": "2024-03-08T21:00:00Z",
//                         "values": {
//                             "temperature": 49.53
//                         }
//                     }
//                 ]
//             }





// console.log("All teams in order");
// for (let index = 0; index < teams.length; index++) {
//   console.log(teams[index]);
// }

let Jersey = [ 
    {
     // time: 20240308T16:3700Z,
     values: {
         cloudBase: 0.87,
         cloudCeiling: 0.87,
         cloudCover: 100,
         dewPoint: 34.14,
         freezingRainIntensity: 0,
         humidity: 45,
         precipitationProbability: 0,
         pressureSurfaceLevel: 30.24,
         rainIntensity: 0,
         sleetIntensity: 0,
         snowIntensity: 0,
         temperature: 49.66,
         temperatureApparent: 49.66,
         uvHealthConcern: 1,
         uvIndex: 3,
         visibility: 9.94,
         weatherCode: 1001,
         windDirection: 43.19,
         windGust: 5.31,
         windSpeed: 1.82
     },
 },
 
];
let obj=[];
for (let index = 0; index < Jersey.length; index++) {
    let jerseyvalues = {
        temperature: Jersey[index].values.temperature,
        windDirection: Jersey[index].values.windDirection,
        windSpeed: Jersey[index].values.windDirection,
    };
    obj.push(jerseyvalues)
}
 


console.log(obj)


