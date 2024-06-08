//Using javascript's random number generator, create function that replicates two dice rolls with possible values between 1-6 for each die. Two users will each get one throw per turn. Whoever rolls the higher number wins. For example, if user 1 rolls an 11 and user 2 rolls a 9 then print user 1 wins.  The function should accept each die value as a parameter so the function should be diceRoll(die1, die2)








function userOne(){
    let die1= Math.ceil(Math.random()*6);
    let die2= Math.ceil(Math.random()*6);
    let totalOne= die1 + die2;
    let userOne==totalOne={;

    }
    console.log(totalOne);
    
}
function userTwo(){
    let die1= Math.ceil(Math.random()*6);
    let die2= Math.ceil(Math.random()*6);
    let totalTwo= die1 + die2; 
    let userTwo==totalTwo={}
    console.log(totalTwo);
    
}
function result(){
    if (userOne > userTwo){
        console.log("User 1 wins");
    } else if (userTwo > userOne){
        console.log("User 2 wins");
    }
    }


userOne();
userTwo();
result();

//Using javascript's random number generator, create function that replicates two dice rolls with possible values between 1-6 for each die. Two users will each get one throw per turn. Whoever rolls the higher number wins. For example, if user 1 rolls an 11 and user 2 rolls a 9 then print user 1 wins.  The function should accept each die value as a parameter so the function should be diceRoll(die1, die2)

// User One
let die1= Math.ceil(Math.random()*6);
let die2= Math.ceil(Math.random()*6);
let totalOne= die1 + die2;
 
// User Two
let die3= Math.ceil(Math.random()*6);
let die4= Math.ceil(Math.random()*6);
let totalTwo= die3 + die4; 
    
// Results
function result(){
    console.log("UserOne: ", totalOne)
    console.log("UserTwo: ", totalTwo)
    if (totalOne > totalTwo) {
        console.log("Player 1 Wins!");
    } else if (totalOne < totalTwo) {
        console.log("Player 2 Wins!");
    } else if (totalOne == totalTwo)
    console.log("Players Tied.");
    }
    
// Called Functions
result();