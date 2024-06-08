

let averagewindspeed = 15.42;
if(averagewindspeed < 5){
    console.log("slightlywindy");
} else if(averagewindspeed >= 5 && averagewindspeed < 15){
    console.log("moderate winds,grab a jacket");
} else if(averagewindspeed >= 15 && averagewindspeed < 25){
    console.log("conditions are hazardous");
} else{console.log("wind advisory warning");
}

// @channel Using javascript's random number generator, create function that replicates two dice rolls with possible values between 1-6 for each die. Two users will each get one throw per turn. Whoever rolls the higher number wins. For example, if user 1 rolls an 11 and user 2 rolls a 9 then print user 1 wins.  The function should accept each die value as a parameter so the function should be diceRoll(die1, die2) (edited)



// let roll1= Math.floor(Math.random()*6) + 1
// let roll2= Math.floor(Math.random()*6) + 1   
// let Player1 = roll1 + roll2;
// let roll3= Math.floor(Math.random()*6) + 1
// let roll4= Math.floor(Math.random()*6) + 1 
// let Player2 = roll3 + roll4;
// console.log(Player1,roll2,roll3,roll4)
// console.log(roll2)
// console.log(Player1)
// console.log(Player2)  
// if(Player1 > Player2){
//     console.log("player1 rolled",Player1,"player 2 rolled",Player2,'"player 1 wins"');
// }else if( Player1 < Player2){
//     console.log("player1 rolled",Player1,"player2 rolled",Player2,'"player 2 wins"',);
// }else{
//     console.log("player1 rolled",Player1,"player2 rolled",Player2,"you suck it's a tie");
// }

function diceRoll(){
    let roll1 = Math.floor(Math.random()*6) + 1;
    let roll2 = Math.floor(Math.random()*6) + 1; 
    return roll1 + roll2; 
}

function dieGame(){
    let Player1 = diceRoll();
    let Player2 = diceRoll();
if(Player1 > Player2){
    console.log("player1 rolled",diceRoll(),"player 2 rolled",diceRoll(),'"player 1 wins"');
}else if( Player1 < Player2){
    console.log("player1 rolled",diceRoll(),"player2 rolled",diceRoll(),'"player 2 wins"',);
}else{
    console.log("player1 rolled",diceRoll(),"player2 rolled",diceRoll(),"you suck it's a tie");
}
}
dieGame()

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