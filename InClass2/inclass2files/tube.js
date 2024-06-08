// @channel Using javascript's random number generator, create function that replicates two dice rolls with possible values between 1-6 for each die. Two users will each get one throw per turn. Whoever rolls the higher number wins. For example, if user 1 rolls an 11 and user 2 rolls a 9 then print user 1 wins.  The function should accept each die value as a parameter so the function should be diceRoll(die1, die2) (edited) 
// let die1 = Math.floor(Math.random() * 6);
// let die2 = Math.floor(Math.random() * 6);
// player1 = die1 + die2
// console.log("player1 rolled",player1)
// let die3 = Math.floor(Math.random() * 6);
// let die4 = Math.floor(Math.random() * 6);
// player2 = die3 + die4
// console.log("player2 rolled",player2)
// function dicegame(){
//     if(player1 > player2){
//     console.log("player1 wins");}
//     else if(player1 < player2){
//         console.log("player 2 wins");
//     } else console.log("it's a tie")
// }
// dicegame()
// ---------------------------------------------------------------------

// // Initializing two users to a score of zero
// //let user1 = 0;
// //let user2 = 0;

// // Initializing the two die
// let die1 = Math.ceil(Math.random() * 6);
// let die2 = Math.ceil(Math.random() * 6);

// function diceRoll(die1, die2) {
//   // Getting the score total
//   user1 = die1 + die2;

//   //Calculating the score for player
//  die1 = Math.ceil(Math.random() * 6);
//  die2 = Math.ceil(Math.random() * 6);
//   user2 = die1 + die2;

//   //console.log("User1 score: ", user1);
//   //console.log("User2 score: ", user2);

//   if (user1 > user2) {
//     console.log("user 1 wins",user1,user2);
//   } else if (user2 > user1) {
//     console.log("user2 wins","U1:",user1,"U2:",user2);
//   } else {
//     console.log("It's a tie");
//   }
// }

// diceRoll(die1, die2);


//------------------------------------------------------------------  
// let die1 = Math.floor(Math.random() * 6);
// let die2 = Math.floor(Math.random() * 6);
// diceRoll = die1 + die2
// let die3 = Math.floor(Math.random() * 6);
// let die4 = Math.floor(Math.random() * 6);
// diceRoll2 = die3 + die4
// //console.log(diceRoll,diceRoll2)
// function roll(){
//     let die1 = Math.floor(Math.random() * 6);
//     let die2 = Math.floor(Math.random() * 6);
//     let player1 = die1 + die2;
//     let die3 = Math.floor(Math.random() * 6);
//     let die4 = Math.floor(Math.random() * 6);
//     let player2 = die3+ die4;
//         if(player1 > player2){
//         console.log("player1 wins",player1,player2);
//              } else if(player1 < player2){
//              console.log("player2 wins",player1,player2);
//              }    else console.log("it's a tie",player1,player2);
//     }
// roll()
// ----------------------------------------------------------------------





// function roll1(){
//     die1 = Math.floor(Math.random() * 6);
//     die2 = Math.floor(Math.random() * 6);
//     shot = die1 + die2;
//     return shot;
// }
// //console.log(roll1());
// function Game(player1,player2){  if(player1 > player2){
//     console.log("player1 wins","P1:",player1,"P2:",player2);
//     } else if(player1 < player2){
//         console.log("player2 wins","P1:",player1,"P2:",player2);
// }    else console.log("it's a tie","P1:",player1,"P2:",player2);
// }
// Game(roll1(),roll1())
// function PI() {
//     return Math.PI;
    
//    }



// console.log(PI())


// -------------------------------------------------------------
// function diceGame(player1,player2){
//     // let player1 = diceRoll;
//     // let player2 = diceRoll2;
//     if(player1 > player2){
//         console.log("player1 wins",player1,player2);
//     } else if(player1 < player2){
//         console.log("player2 wins",player1,player2);
//         }    else console.log("it's a tie",player1,player2)
//  }
// diceGame(diceRoll,diceRoll2)
// let die3 = Math.floor(Math.random() * 6);
// let die4 = Math.floor(Math.random() * 6);
// player2 = die3 + die4
// console.log("player2 rolled",player2)
// function dicegame(){
//     if(player1 > player2){
//     console.log("player1 wins");}
//     else if(player1 < player2){
//         console.log("player 2 wins");
//     } else console.log("it's a tie")
// }
// dicegame()



//---------------------------------------------------------------------------
// Let's search for the Braves in the array using a for loop'

// let teams = ["Braves", "Reds", "Yankees", "Red Sox", "Marlins"]; // The last index is 4

/*For loops have three steps
Step 1: Set the starting point (let index = 0;)
We create a variable that serves as a placeholder for the index we are currently pointing at.
Since we want to start our loop at the first index we set the value to 0

Step 2: Set the end condition (index < teams.length;)
We set up a condition for our loop to stop running. If the condition is never met, an
infinite loop may occur which could crash your computer. The condition must stop the
loop from going past the last index in the array.

The .length property returns the number of elements in an array, which is always equal to
the last index + 1. By setting our condition to index < teams.length, the loop will always
end at the last index

Step 3: Increment the value of the index
Everytime the loop reaches the end of the for loops scope, it will return to the top of the
code block. Once this occurs, the value of index will be incremented by 1.
*/

/*
The following loop prints all teams that are inside of the array
*/
// console.log("All teams in order");
// for (let index = 0; index < teams.length; index++) {
//   console.log(teams[index]);
// }

// /*
// Print every team at an odd index
// */
// console.log("\nAll teams that are in an odd index");
// for (let index = 0; index < teams.length; index++) {
//   // Modulo divides a value and it returns the remainder
//   // ex: 3 % 2 = 1
//   // ex: 13 % 5 = 3
//   if (index % 2 != 0) {
//     console.log(teams[index]);
//   }
// }

// /*
// Print the array of teams in reverse
// */
// console.log("\nAll teams in reverse");
// for (let index = teams.length - 1; index >= 0; index--) {
//   console.log(teams[index]);
// }

// Part I: Print out every team that has an attendance over 30000.
// Part II: Print the list of teams in alphabetical order by name
// let index = 0
// teams = [
//   {
//     name: "Braves",
//     city: "Atlanta", // Not really in Atlanta
//     state: "GA",
//     avgAttendance: 39401,
//   },
//   {
//     name: "Reds",
//     city: "Cincinatti",
//     state: "OH",
//     avgAttendance: 25164,
//   },
//   {
//     name: "Yankees",
//     city: "New York City",
//     state: "NY",
//     avgAttendance: 40862,
//   },
//   {
//     name: "Red Sox",
//     city: "Boston",
//     state: "MA",
//     avgAttendance: 32989,
//   },
// ];

// for(let index = 0; index < teams.length;index++);
// console.log("All teams in order")
// function getattendeance(){
// for (let index = 0; index < teams.length; index++) {
//      if (teams[index].avgAttendance >= 30000){
//      console.log(teams[index]);
//   }

// }
// }
// getattendeance(teams)

//   for(let index = 0; index < teams.length; index++){
//     if (index % 2 != 0) {
//       console.log(teams[index]);
//       }
// }

//-----------------------------------------------------------------

/*
1). Get the current temperature(F), UV index, wind speed, rain chance, and wind direction of Newark, NJ and store it within an object. Print the object to the terminal
2). Retrieve the temperature of Newark 4 hours from now and add it to the previously created object
3). Do the same for the following cities:
 Los Angeles
Miami
Charlotte
Houston
Seattle
4). Add each city to an array
5). Print out the city that will be the warmest in 4 hours
*/

//Creates an array that holds all city data
// let citydata = [
//     {
//       data: {
//         time: "2024-03-08T19:54:00Z",
//         values: {
//           cloudBase: null,
//           cloudCeiling: null,
//           cloudCover: 2,
//           dewPoint: -5.38,
//           freezingRainIntensity: 0,
//           humidity: 35,
//           precipitationProbability: 0,
//           pressureSurfaceLevel: 1022.69,
//           rainIntensity: 0,
//           sleetIntensity: 0,
//           snowIntensity: 0,
//           temperature: 13,
//           temperatureApparent: 13,
//           uvHealthConcern: 0,
//           uvIndex: 1,
//           visibility: 16,
//           weatherCode: 1000,
//           windDirection: 126.63,
//           windGust: 1.69,
//           windSpeed: 0.88,
//         },
//       },
//       location: {
//         lat: 40.73565673828125,
//         lon: -74.17236328125,
//         name: "Newark, Essex County, New Jersey, United States",
//         type: "administrative",
//       },
//     },
//     {
//       data: {
//         time: "2024-03-08T19:57:00Z",
//         values: {
//           cloudBase: null,
//           cloudCeiling: null,
//           cloudCover: 5,
//           dewPoint: 10.88,
//           freezingRainIntensity: 0,
//           humidity: 64,
//           precipitationProbability: 0,
//           pressureSurfaceLevel: 1005.55,
//           rainIntensity: 0,
//           sleetIntensity: 0,
//           snowIntensity: 0,
//           temperature: 17.88,
//           temperatureApparent: 17.88,
//           uvHealthConcern: 2,
//           uvIndex: 6,
//           visibility: 16,
//           weatherCode: 1000,
//           windDirection: 234.31,
//           windGust: 2.19,
//           windSpeed: 1.88,
//         },
//       },
//       location: {
//         lat: 34.05369186401367,
//         lon: -118.24276733398438,
//         name: "Los Angeles, California, United States",
//         type: "administrative",
//       },
//     },
//     {
//       data: {
//         time: "2024-03-08T19:57:00Z",
//         values: {
//           cloudBase: 0.33,
//           cloudCeiling: 0.33,
//           cloudCover: 88,
//           dewPoint: 23.81,
//           freezingRainIntensity: 0,
//           humidity: 86,
//           precipitationProbability: 0,
//           pressureSurfaceLevel: 1012.9,
//           rainIntensity: 0,
//           sleetIntensity: 0,
//           snowIntensity: 0,
//           temperature: 26.38,
//           temperatureApparent: 26.38,
//           uvHealthConcern: 1,
//           uvIndex: 4,
//           visibility: 15.83,
//           weatherCode: 1001,
//           windDirection: 139,
//           windGust: 5.69,
//           windSpeed: 1.81,
//         },
//       },
//       location: {
//         lat: 25.774173736572266,
//         lon: -80.19361877441406,
//         name: "Miami, Miami-Dade County, Florida, United States",
//         type: "city",
//       },
//     },
//     {
//       data: {
//         time: "2024-03-08T19:58:00Z",
//         values: {
//           cloudBase: 0.52,
//           cloudCeiling: 0.52,
//           cloudCover: 100,
//           dewPoint: 12.31,
//           freezingRainIntensity: 0,
//           humidity: 77,
//           precipitationProbability: 0,
//           pressureSurfaceLevel: 994.3,
//           rainIntensity: 0,
//           sleetIntensity: 0,
//           snowIntensity: 0,
//           temperature: 16.38,
//           temperatureApparent: 16.38,
//           uvHealthConcern: 0,
//           uvIndex: 1,
//           visibility: 16,
//           weatherCode: 1001,
//           windDirection: 115.19,
//           windGust: 6,
//           windSpeed: 3.5,
//         },
//       },
//       location: {
//         lat: 35.22720718383789,
//         lon: -80.84308624267578,
//         name: "Charlotte, Mecklenburg County, North Carolina, United States",
//         type: "administrative",
//       },
//     },
//     {
//       data: {
//         time: "2024-03-08T19:58:00Z",
//         values: {
//           cloudBase: 0.74,
//           cloudCeiling: 0.74,
//           cloudCover: 100,
//           dewPoint: 22.5,
//           freezingRainIntensity: 0,
//           humidity: 71,
//           precipitationProbability: 0,
//           pressureSurfaceLevel: 1004.39,
//           rainIntensity: 0,
//           sleetIntensity: 0,
//           snowIntensity: 0,
//           temperature: 28.63,
//           temperatureApparent: 32.09,
//           uvHealthConcern: 1,
//           uvIndex: 2,
//           visibility: 15.97,
//           weatherCode: 1001,
//           windDirection: 258.69,
//           windGust: 5.5,
//           windSpeed: 2.31,
//         },
//       },
//       location: {
//         lat: 29.75893783569336,
//         lon: -95.3676986694336,
//         name: "Houston, Harris County, Texas, United States",
//         type: "administrative",
//       },
//     },
//     {
//       data: {
//         time: "2024-03-08T19:58:00Z",
//         values: {
//           cloudBase: 0.86,
//           cloudCeiling: 0.86,
//           cloudCover: 100,
//           dewPoint: 1.69,
//           freezingRainIntensity: 0,
//           humidity: 62,
//           precipitationProbability: 0,
//           pressureSurfaceLevel: 1017.15,
//           rainIntensity: 0,
//           sleetIntensity: 0,
//           snowIntensity: 0,
//           temperature: 8.38,
//           temperatureApparent: 8.38,
//           uvHealthConcern: 1,
//           uvIndex: 2,
//           visibility: 16,
//           weatherCode: 1001,
//           windDirection: 214,
//           windGust: 2.19,
//           windSpeed: 1.63,
//         },
//       },
//       location: {
//         lat: 47.60383224487305,
//         lon: -122.33006286621094,
//         name: "Seattle, King County, Washington, United States",
//         type: "administrative",
//       },
//     },
//   ];
  
//   let futureTemps = [
//     {
//       data: {
//         timelines: [
//           {
//             timestep: "1h",
//             endTime: "2024-03-09T02:00:00Z",
//             startTime: "2024-03-08T20:00:00Z",
//             intervals: [
//               {
//                 startTime: "2024-03-08T20:00:00Z",
//                 values: {
//                   temperature: 54.73,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T21:00:00Z",
//                 values: {
//                   temperature: 53.61,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T22:00:00Z",
//                 values: {
//                   temperature: 50.46,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T23:00:00Z",
//                 values: {
//                   temperature: 46.91,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T00:00:00Z",
//                 values: {
//                   temperature: 43.72,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T01:00:00Z",
//                 values: {
//                   temperature: 41.73,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T02:00:00Z",
//                 values: {
//                   temperature: 40.72,
//                 },
//               },
//             ],
//           },
//         ],
//       },
//     },
//     {
//       data: {
//         timelines: [
//           {
//             timestep: "1h",
//             endTime: "2024-03-09T02:00:00Z",
//             startTime: "2024-03-08T20:00:00Z",
//             intervals: [
//               {
//                 startTime: "2024-03-08T20:00:00Z",
//                 values: {
//                   temperature: 64.96,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T21:00:00Z",
//                 values: {
//                   temperature: 65.04,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T22:00:00Z",
//                 values: {
//                   temperature: 66,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T23:00:00Z",
//                 values: {
//                   temperature: 64.8,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T00:00:00Z",
//                 values: {
//                   temperature: 63.07,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T01:00:00Z",
//                 values: {
//                   temperature: 61.13,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T02:00:00Z",
//                 values: {
//                   temperature: 58.47,
//                 },
//               },
//             ],
//           },
//         ],
//       },
//     },
//     {
//       data: {
//         timelines: [
//           {
//             timestep: "1h",
//             endTime: "2024-03-09T02:00:00Z",
//             startTime: "2024-03-08T20:00:00Z",
//             intervals: [
//               {
//                 startTime: "2024-03-08T20:00:00Z",
//                 values: {
//                   temperature: 79.93,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T21:00:00Z",
//                 values: {
//                   temperature: 82.44,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T22:00:00Z",
//                 values: {
//                   temperature: 81.5,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T23:00:00Z",
//                 values: {
//                   temperature: 79.64,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T00:00:00Z",
//                 values: {
//                   temperature: 77.85,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T01:00:00Z",
//                 values: {
//                   temperature: 77.16,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T02:00:00Z",
//                 values: {
//                   temperature: 76.57,
//                 },
//               },
//             ],
//           },
//         ],
//       },
//     },
//     {
//       data: {
//         timelines: [
//           {
//             timestep: "1h",
//             endTime: "2024-03-09T02:00:00Z",
//             startTime: "2024-03-08T20:00:00Z",
//             intervals: [
//               {
//                 startTime: "2024-03-08T20:00:00Z",
//                 values: {
//                   temperature: 62.04,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T21:00:00Z",
//                 values: {
//                   temperature: 63.43,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T22:00:00Z",
//                 values: {
//                   temperature: 62.74,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T23:00:00Z",
//                 values: {
//                   temperature: 61.27,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T00:00:00Z",
//                 values: {
//                   temperature: 58.54,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T01:00:00Z",
//                 values: {
//                   temperature: 57.83,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T02:00:00Z",
//                 values: {
//                   temperature: 56.97,
//                 },
//               },
//             ],
//           },
//         ],
//       },
//     },
//     {
//       data: {
//         timelines: [
//           {
//             timestep: "1h",
//             endTime: "2024-03-09T02:00:00Z",
//             startTime: "2024-03-08T20:00:00Z",
//             intervals: [
//               {
//                 startTime: "2024-03-08T20:00:00Z",
//                 values: {
//                   temperature: 82.96,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T21:00:00Z",
//                 values: {
//                   temperature: 75.82,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T22:00:00Z",
//                 values: {
//                   temperature: 75.81,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T23:00:00Z",
//                 values: {
//                   temperature: 75.28,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T00:00:00Z",
//                 values: {
//                   temperature: 72.55,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T01:00:00Z",
//                 values: {
//                   temperature: 70.47,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T02:00:00Z",
//                 values: {
//                   temperature: 68.59,
//                 },
//               },
//             ],
//           },
//         ],
//       },
//     },
//     {
//       data: {
//         timelines: [
//           {
//             timestep: "1h",
//             endTime: "2024-03-09T02:00:00Z",
//             startTime: "2024-03-08T20:00:00Z",
//             intervals: [
//               {
//                 startTime: "2024-03-08T20:00:00Z",
//                 values: {
//                   temperature: 47.64,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T21:00:00Z",
//                 values: {
//                   temperature: 48.05,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T22:00:00Z",
//                 values: {
//                   temperature: 48.37,
//                 },
//               },
//               {
//                 startTime: "2024-03-08T23:00:00Z",
//                 values: {
//                   temperature: 49.05,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T00:00:00Z",
//                 values: {
//                   temperature: 48.59,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T01:00:00Z",
//                 values: {
//                   temperature: 48.35,
//                 },
//               },
//               {
//                 startTime: "2024-03-09T02:00:00Z",
//                 values: {
//                   temperature: 47.02,
//                 },
//               },
//             ],
//           },
//         ],
//       },
//     },
//   ];
//   let usefulStats = [];
//   let warmestTemp = 0;
//   let warmestCity = {};
//   for (let i = 0; i < citydata.length; i++) {
//     let newCity = {
//       name: citydata[i].location.name,
//       temp: citydata[i].data.values.temperature,
//       uvIndex: citydata[i].data.values.uvIndex,
//       windspeed: citydata[i].data.values.windSpeed,
//       windDirection: citydata[i].data.values.windDirection,
//       rainChance: citydata[i].data.values.precipitationProbability,
//       fourHourOutlook:
//         futureTemps[i].data.timelines[0].intervals[4].values.temperature,
//     }; 
//     usefulStats.push(newCity);
//   }
  
//   for (let j = 0; j < usefulStats.length; j++) {
//     if (usefulStats[j].fourHourOutlook > warmestTemp) {
//       warmestTemp = usefulStats[j].fourHourOutlook;
//       warmestCity = usefulStats[j].name;
//     }
//   }
  
//   console.log(usefulStats);
//   console.log("Warmest City:", warmestCity,"/ Warmest Temp:",warmestTemp);
 