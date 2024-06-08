//console.log("hello");
//console.log(234556);


//window.alert(`This is an alert`);
//window.alert(`I like pizza!`);

//document.getElementById("myH1").textContent = "hello";
//document.getElementById("myP").textContent = "Hello";

// ----------------------------------------------------------
// *** CHAPTER 2: VARIABLES ***
// let age = true;

// let price = 10.99;

// let gpa = 2.1;

//*** TEMPORAL LITERAL: ${} ***

// console.log(`Your age is ${age} year old`);
// console.log(typeof age);

// let fullName ="Big Man";
// let age = 40;
// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `Your age is ${age}`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

// ----------------------------------------------------------------------------

//*** CHAPTER 4: ACCEPT USER INPUT ***

//EASY WAY
// let username;
// username = window.prompt("What's your username");
// console.log(username)

//PROFESSIONAL WAY
// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username =document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myH1").textContent = `Hello ${username}`;
// }
//--------------------------------------------------------------------------    

//*** CHAPTER 5: NUMBER CONVERSION ***

//This is important because when you accept user input it is accepted as a string.

// let age = window.prompt("How old are you?");
// //This input will be accepted as a string but
// // your intended use is for it to be a number.
// //Therefor you need to convert it into a number. Use: Number(variable here)-This is a function.

// age = Number(age); // If you do not use this conversion the value that is inputed into the
// // window.prompt will be a string and it will concatinate the value[ex. 45 + 1= 451] instead of add[ex. 45 + 1= 46](as a number would do).
// //To test this remove the age= Number(age); from these lines of code.
// age+=1;

// console.log(age)


// let x = "pizza"
// let y = "pizza"
// let z = "pizza"

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof(x));
// console.log(y, typeof(y));
// console.log(z, typeof(z));

// RESULT:corcoding@Coding-17 tube % node index.js
// NaN number
// pizza string
// true boolean

//NOTE: THERE ARE MANY OTHER USES FOR THIS FUNCTION. DO RESEARCH

//-------------------------------------------------------------------------
//*** CHAPTER 6: CONSTANTS ***



//-------------------------------------------------------------------------
//*** CHAPTER 10 IF STATEMENTS ***/
//NESTED IF STATEMENT
//NOTE: THE ORDER OF IF STATEMENTS MATTERS. ONCE THE COMPUTER FIND A VALUE THAT IS
//IT STOPS SEARCHING FOR STATEMENTS. SO BE MINDFUL IN WRITING IF STATEMENTS AND
//THE ORDER

// let age = 18;
// let license = false;

// if(age >= 16){
//     console.log("You are old enough to drive");

//     if(license){
//         console.log("You have your license");
//     }
//     else{
//         console.log("You do not have your license.");
//     }
// }
// else{
//     console.log("You are not old enough to drive");
// }

//*** TEXTBOX AGE SUBMIT ***

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit")
// const resultElement = document.getElementById("resultElement")

// let age;

// mySubmit.onclick = function(){

//     age = myText.value;
//     age = Number(age);

//     if(age >= 100){
//         resultElement.textContent = `You are TOO OLD to enter this site`
//     }
//     else if(age == 0){
//         resultElement.textContent = `You can't enter. You were just born.`
//     }
//     else if(age >= 18){
//         resultElement.textContent = `You are old enough to enter the site`
//     }
//     else if(age < 0){
//         resultElement.textContent = `Your age can't be below ${0}`
//     }
//     else{
//         resultElement.textContent = `You must be ${18}+ to enter this site`
//     }
// }

//-----------------------------------------------------------------







 


 
   











