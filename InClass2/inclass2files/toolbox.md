
*** IF STATEMENTS/CONDITIONALS ***


if(price < 25000) {
    console.log("Buy the car with cash");
    // Use the &&(AND) to evaluate more than one condition in
    // a single statement
} else if(price >= 25000 && price < 35000) {
    console.log("Pay $25000 cash and finance the rest");
} else {
    console.log("The car is too expensive, pick a different one");
}
--------------------------------------------------------------------------------


*** FUNCTIONS ***

/* 
Functions are snippets of code that are run when called
*/

//Any variables declared outside of a function or code block has a
// global scope and can be called by any code block within the file

let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function sayHello(username) {
    console.log("Hi, my name is " + username);
}

// Variables declared within a function are scoped locally, meaning
// other functions do not have access to that variable
function generateWindWarning(day1, day2, day3) {
    let averageWindspeed = (day1 + day2 + day3)/3
    console.log(averageWindspeed);
    if(averageWindspeed < 0) {
        console.log("Illegal value provided");
    } else if(averageWindspeed < 5) {
        console.log("slightly windy");
    } else if(averageWindspeed >= 5 && averageWindspeed < 15) {
        console.log("Moderate winds, grab a jacket");
    } else if(averageWindspeed >= 15 && averageWindspeed < 25) {
        console.log("conditions are hazardous");
    } else if (averageWindspeed >= 25) {
        console.log("wind advisory warning");
    }
}

function generateWeatherWarning() {
    console.log(averageWindspeed);
}

//Checks if the users number matches the lottery number
function lottery(userNumber) {
    // Generate a random number, which is going to be the lottery
    // number
    let lotteryNumber = Math.ceil(Math.random() * 100);
    console.log("Usernumber: " + userNumber)
    console.log("Lotterynumber: " + lotteryNumber)
    if(userNumber === lotteryNumber) {
        console.log(`Congratulations! You've won the lottery!`);
    } else {
        console.log(`Better luck next time`);
    }
}

// To call a function, write the function name followed by a ()
//generateWindWarning(7, 12, 15);
//sayHello("Dre");
//generateWeatherWarning();
lottery(randomNumber);

/* 
Values that are passed to a function during a function call are called
arguments

Values that are received by the function that is being called are called
parameters
*/

-----------------------------------------------------------------------------

*** FOR LOOPS ***

// Let's search for the Braves in the array using a for loop'

let teams = ["Braves", "Reds", "Yankees", "Red Sox", "Marlins"]; // The last index is 4

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
console.log("All teams in order");
for (let index = 0; index < teams.length + 1; index++) {
  console.log(teams[index]);
}

/*
Print every team at an odd index
*/
console.log("\nAll teams that are in an odd index");
for (let index = 0; index < teams.length; index++) {
  // Modulo divides a value and it returns the remainder
  // ex: 3 % 2 = 1
  // ex: 13 % 5 = 3
  if (index % 2 != 0) {
    console.log(teams[index]);
  }
}

/*
Print the array of teams in reverse
*/
console.log("\nAll teams in reverse");
for (let index = teams.length - 1; index >= 0; index--) {
  console.log(teams[index]);
}

// Part I: Print out every team that has an attendance over 30000.
// Part II: Print the list of teams in alphabetical order by name
teams = [
  {
    name: "Braves",
    city: "Atlanta", // Not really in Atlanta
    state: "GA",
    avgAttendance: 39401,
  },
  {
    name: "Reds",
    city: "Cincinatti",
    state: "OH",
    avgAttendance: 25164,
  },
  {
    name: "Yankees",
    city: "New York City",
    state: "NY",
    avgAttendance: 40862,
  },
  {
    name: "Red Sox",
    city: "Boston",
    state: "MA",
    avgAttendance: 32989,
  },
];

for (let i = 0; i < teams.length - 1; i++) {
  console.log("Current team: ", teams[i].name);
  console.log("Next team: ", teams[i + 1].name);
  if (teams[i].name < teams[i + 1].name) {
    console.log("Current teams name comes before the next team name");
  }
}

-------------------------------------------------------------------------


*** WHILE LOOPS ***

/* 
While loops are very similar to for loops, but they do not auto
increment the index nor do they set a condition to when the loop
should end
*/


let bool = [true, false, false, true, true, true, false];

let i = 0;
while(i < bool.length) {
    if(bool[i] === true) {
        console.log(i);
    }
    i++;
}
--------------------------------------------------------------------

*** FETCH ***

// Functions come in many shapes and sizes

function getBirthdate() {
  //Does some here
}

// Anonymous Function
// () => {
//   console.log("Anonymous function is running");
// };

let randomUser = {}


//Fetch is a function that makes an API call
// It takes in the url of the API as its parameter
fetch("https://randomuser.me/api/?results=5") // api for the get request
  // Another example of an anonymous function, response is the parameter for
  // this function, meaning the response from the server will be stored in
  // a variable called response

  // Response.json() converts the response into the JSON format 
  .then((response) => response.json())
  // This .then is the second function called in the promise chain
  // The value stored in the previous function is also passed as 
  // an argument to the next function even without a return statement
  // data now holds the value of response.json()
  .then((data) => console.log(data));


  _____________________________________________________________________

  *** RANDOM NUMBER ***

  // Initializing two users to a score of zero
// let user1 = 0;
// let user2 = 0;

// // Initializing the two die
// let die1 = Math.ceil(Math.random() * 6);
// let die2 = Math.ceil(Math.random() * 6);

// function diceRoll(die1, die2) {
//   // Getting the score total
//   user1 = die1 + die2;

//   // Calculating the score for player
//   die1 = Math.ceil(Math.random() * 6);
//   die2 = Math.ceil(Math.random() * 6);
//   user2 = die1 + die2;

//   console.log("User1 score: ", user1);
//   console.log("User2 score: ", user2);

//   if (user1 > user2) {
//     console.log("user 1 wins");
//   } else if (user2 > user1) {
//     console.log("user2 wins");
//   } else {
//     console.log("It's a tie");
//   }
// }

// diceRoll(die1, die2);

// ----------------------------------------------------------------------------------------

function dieRoll() {
  let die1 = Math.ceil(Math.random() * 6);
  let die2 = Math.ceil(Math.random() * 6);
  // Returns a value to the function caller
  return die1 + die2;
}

function diceGame() {
  // The dicegame function calls the dieroll function
  // The return value from dieroll is assigned to user1 and user2 scores
  let user1 = dieRoll();
  let user2 = dieRoll();
  // String Formatting, %d this is a placeholder for a number
  //                    \n indicates a new line
  console.log("User 1: %d\nUser2: %d", user1, user2);

  if (user1 > user2) {
    console.log("User 1 wins");
  } else if (user2 > user1) {
    console.log("User 2 wins");
  } else {
    console.log("It's a tie");
  }
}

// Starts the game
diceGame();

------------------------------------------------------------------


*** DOM ***

DOM JAVASCRIPT//////////////////////////////
function buttonClick(){
    let cereal = document.getElementsByTagName('body');
    console.log(cereal);
    let button = document.getElementById('button1');
    button.innerText = "Button was pressed";
    button.style.backgroundColor = "green";


    let newButton = document.createElement("button");
    newButton.innerText = "Newly created button";
    cereal[0].appendChild(newButton);


   



    console.log(cereal);
    console.log(button);

}

<!-- DOM HTML////////////////////////////
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="testdom.css">
    <title>Document</title>
</head>
<body>
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US" prefix="og: http://ogp.me/ns#" class="js no-touch progressive-image no-reduced-motion no-edge no-ie css-mask desktop no-tablet no-windows no-android retina no-safari no-old-safari chrome no-firefox no-iphone no-ipad no-old-macos no-inline-video" data-layout-name="apple-watch-series-9-elevated"><head>
	

    <h2>JavaScript HTML DOM</h2>

    <p>Finding HTML Elements by Class Name.</p>
    <p class="intro">Hello World!</p>
    <p class="intro">This example demonstrates the <b>getElementsByClassName</b> method.</p>
    
    <p id="demo"></p>

    <img src="https://www.apple.com/v/iphone-15/c/images/overview/welcome/hero_endframe__e0ajd2ayxqc2_large.jpg" alt="iphone-15">

</body>
<script src="./testdom.js"></script>
</html> -->

--------------------------------------------------------------------------

*** INSERT IMAGE DOM ***

INSERT IMAGE DOM JAVASCRIPT//////////////////////////////
function getWeather() {
    // fetch("https://dog.ceo/api/breeds/image/random")
    //     .then(resp => resp.json())
    //     .then(img => {
    //         let dogImage = document.getElementById("dogImg");
    //         console.log(dogImage.src);
    //         dogImage.src = img.message;
    //     })


    // Mock API Response
    let currentWeather = {
        highTemp: 85,
        lowTemp: 53,
        windSpeed: 8,
        rainChance: 2,
        date: new Date(),
        condition: "cloudy"
    }

INSERT IMAGE DOM HTML/////////////////////////////////////
<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How to Add an Image in DOM</title>
    <link rel="stylesheet" href="./insertImage.css">
    <script src="./insertImage.js"></script>
</head>
<body>
    <!-- <img src="../../assets/sun.png" alt="" id="dogImg"> -->
    <button onclick="getWeather()"></button>
</body>
</html>


<a href="https://www.flaticon.com/free-icons/weather" title="weather icons">Weather icons created by Freepik - Flaticon</a> -->

INSERT IMAGE DOM CSS////////////////////////////////////////////

#dogImg {
    width: 200px;
    height: auto;
}

--------------------------------------------------------------------

*** DOM PHONEBOOK ***

PHONEBOOK JAVASCRIPT////////////////////////////////////////

function getUsers() {
    // Call the Random User API
    fetch('https://randomuser.me/api/?results=20')
    .then(resp => {
        return resp.json();
    })
    .then(user => {
        console.log(user);
        for(let i = 0; i < user.results.length; i++) {
            // Create container for detailed user view
            let detailedContainer = document.createElement("div");
            detailedContainer.classList.add("card");

            // Create an image element for a user
            let userImage = document.createElement("img");

            // Create a p tag for each relevant piece of user info
            let nameTag = document.createElement("p");
            let genderTag = document.createElement("p");
            let emailTag = document.createElement("p");
            let phoneTag = document.createElement("p");


            // Add the values for gender, email, and phone to our newly created tags
            genderTag.innerText = user.results[i].gender;
            emailTag.innerText = user.results[i].email;
            phoneTag.innerText = user.results[i].phone;
            nameTag.innerText = user.results[i].name.first + " " + user.results[i].name.last;;

            // Add user image
            userImage.src = user.results[i].picture.thumbnail;

            // Append each of our p tags to the div container
            detailedContainer.appendChild(userImage);
            detailedContainer.appendChild(nameTag);
            detailedContainer.appendChild(genderTag);
            detailedContainer.appendChild(emailTag);
            detailedContainer.appendChild(phoneTag);
            

            // Finally we add the entire container to the body
            document.body.appendChild(detailedContainer);
            
        }
    })
}


DOM PHONEBOOK HTML////////////////////////////////////////////

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link rel="stylesheet" href="./phonebook.css">
    <title>Phonebook</title>
</head>
<body>
    <button type="button" onclick="getUsers()" class="btn btn-primary">Generate Users</button>
    <script src="./phonebook.js"></script>
</body>
</html> -->

DOM PHONEBOOK CSS//////////////////////////////////////////

.card {
    border-width: 2px;
    border-color: green;
    margin: 5px;
}

body {
    display: grid;
    grid-template-columns: 50% 50%;
}

img {
    width: 25%;
    height: 25%;
}

*** FORMS ***

FORMS JAVASCRIPT//////////////////////////////

function getEmail() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let profile = document.getElementById("profile");
  
  console.log("Email: ", email.value);
  console.log("Password: ", password.value);
  console.log("Profile: ", profile.value);
}

FORMS HTML////////////////////////////////////

<!-- <!DOCTYPE html>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/forms.css">
</head>

<body>
    <form onsubmit="getEmail()">
        <fieldset>
            <div>
                <button type="button" class="btn-close" aria-label="Close"></button>
            </div>

            <p>
                <label for="email">What's Your Email?</label>
                <input type="email" name="userEmail" value="email" class="form-control" id="email">
            </p>
            <p>
                <label for="password">Type in your password</label>
                <!-- Type password hides the characters being entered -->
                <input type="password" name="passwordbox" minlength="8" class="form-control" value="password" id="password">
            </p>
            <p>
                <label for="profile">Create a profile name</label>
                <input type="text" name="profilebox" value="profile" class="form-control" id="profile">
            </p>

            <p>
                <label for="gender">Select a gender</label>
                <!-- The radio type creates a multiple choice selection items -->
                <label><input type="radio" name="gender">Male</label>
                <label><input type="radio" name="gender">Female</label>
                <label><input type="radio" name="gender">Non-Binary</label>
                <label><input type="radio" name="gender">Prefer Not to Say</label>
            </p>
            <p>
                <label for="UserAgreement">I agree to share my data</label>
                <input type="checkbox" name="UserAgreement" id="UserAgreement">
            </p>

            <div>
                <!-- Always use type submit when working with forms -->
                <button onsubmit="getEmail()" type="submit" class="btn btn-success">Sign Up</button>
            </div>


        </fieldset>
    </form>

    <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Dropdown link
        </a>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
        <script src="../../dom/forms.js"></script>
</body>

</html> -->

 -->

FORMS CSS////////////////////////////////////////////////

.form-control {
    background-color: lightgrey;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 300;
}

#submit {
    background-color: green;
    border-style: dashed;
}

