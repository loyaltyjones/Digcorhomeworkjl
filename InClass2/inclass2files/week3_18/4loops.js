// fetch("http://api.weatherapi.com/v1/forecast.json?key=4cf64bd445294b9d873151742241803&q=London&days=5&aqi=no&alerts=no")
// .then((response) => response.json())
// .then((data) => {
//  //console.log(data.forecast.forecastday)
// for(i = 0; i < data.forecast.forecastday.length; i++){

//     // console.log(data.forecast.forecastday[i].date,data.forecast.forecastday[i].date,data.forecast.forecastday[i].astro.sunrise,data.forecast.forecastday[i].day.maxtemp_c,data.forecast.forecastday[i].hour[1],)
//     let maxTempC = data.forecast.forecastday[i].day.maxtemp_c;
//    // console.log(maxTemp3_24)
//     let maxTempF = data.forecast.forecastday[i].day.maxtemp_f;
//     if(maxTempF < maxTempC){
//         console.log(maxTempC + " Celsius is warmer than " + maxTempF);
//         } else{
//             console.log(maxTempF + " Fahrenheit is warmer than " + maxTempC)
//         }
    
     
// }

// let date = data.forecast.forecastday[1].date
// let container1 = document.createElement("div");
// container1.innerText = date;
// document.body.appendChild(container1);

//})



// for (var i = 0; i < 10; i++) {
//     let name = "John Doe" + i;
//     let dog = "henry";
//     // let cat = 0 + i
//     console.log("Hi, my name is " + name + " " + dog);
   
//   }
// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

// let total1 = 0;
// let total2 = 0;


// for(i = 0; i < arr_1.length; i++){
//     total1 = total1 + arr_1[i];
//     //console.log(total1);
// };
// for(j = 0; j < arr_2.length; j++){
//     total2 = total2 + arr_2[j];
//     //console.log(total2);
// }
// console.log(total1 + total2);

// ********************** Exercise 2 STARTS HERE **********************
// Using a for loop print all even numbers up to and including n. Don’t include 0.  


// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line 
// let numberarray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
// for(i = 0; i < numberarray.length; i++){
//     if(i % 2 !=0){
        
//         console.log(numberarray[i]);
//     }

// }   

// }
// console.log("\nAll teams that are in an odd index");
// for (let index = 0; index < teams.length; index++) {
//   // Modulo divides a value and it returns the remainder
//   // ex: 3 % 2 = 1
//   // ex: 13 % 5 = 3
//   if (index % 2 != 0) {
//     console.log(teams[index]);
//   }
// }


// let text = "";

// for (let i = 0; i < 5; i++) {
// text+= "The number is " + i + "<br>";

// }
// console.log(text)


// const characters = ["Sonic","Tails","Mario","Luigi","Bowzer","Princess","Toad"];

// for(let i = 1; i < characters.length;  i= i +2){
//     if(i === characters.length - 1){
//         console.log(`and ${characters[i]}.`);
//     }else
//     console.log(`${characters[i]},`);

// }

//A for loop that counts from 0 to 100 looks like this
// let x = [4,5,6,7,8]
// let totalx = 0
// let totaly = 0
// for(var i = 0; i < x.length; i = i + 1){
// //console.log(x[i])}
// totalx = totalx + x[i];
// }
// for (let j = 0; j < x.length; j++){
// //console.log(x[j])
// totaly = totaly + (x[j]);
// };


// console.log(totalx + totaly)


   

    //your code that will be executed 100 times here

//     var thisIsAnArray = ["element1", "element2", "element3", "element4"];

// for(i = 0; i < thisIsAnArray.length; i++){
//     console.log(thisIsAnArray[i])
// }

//#7 — Calculate the sum of all the numbers in the following array

// var numbersArray = [1,13,22,123,49];
// let sum = 0;


// for(i = 0; i < numbersArray.length ; i++){
//     sum = sum + numbersArray[i];
//     console.log(sum)
// }

// var number1 = 10;
// let number2 = 20
// if (number1 > number2) {
//   console.log(number1 + " is greater than " +  number2);
// } else {
//   console.log(number2 + " is greater than " +  number1);
// }
grade = 89
if(grade >= 70 && grade < 80){
    console.log("your grade is a C");
}else if(grade >= 80 && grade < 90){
    console.log("your grade is a B");
}else if(grade >= 90 &&  grade > 100){
    console.log("your grade is A");
}else{
    console.log("you have a failing grade")
}
