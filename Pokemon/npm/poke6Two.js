//Main container
// let mainDivCon = document.getElementById("mainDiv");



//Container for partyPokemon
let bench1 = document.getElementById('bench1')
let pokemonTrainerMain = document.createElement("div");
pokemonTrainerMain.classList.add("pokemonTrainerMain");
pokemonTrainerMain.setAttribute('id','pokemonTrainerMain');

bench1.appendChild(pokemonTrainerMain)

//Party Pokemon Attack buttons
let partyAttack1 = document.createElement("button");
partyAttack1.classList.add("partyA1");
partyAttack1.setAttribute('id','partyA1');
let partyAttack2 = document.createElement("button");
partyAttack2.classList.add("partyA1");
partyAttack2.setAttribute('id','partyA2');
let partyAttack3 = document.createElement("button");
partyAttack3.classList.add("partyA1");
partyAttack3.setAttribute('id','partyA3');
let partyAttack4 = document.createElement("button");
partyAttack4.classList.add("partyA1");
partyAttack4.setAttribute('id','partyA4');

let partyAttBox = document.getElementById("partyAttack");
partyAttBox.appendChild(partyAttack1);
partyAttBox.appendChild(partyAttack2);
partyAttBox.appendChild(partyAttack3);
partyAttBox.appendChild(partyAttack4);

fetch("http://localhost:3000/pokedex?partyPokemon")
.then(response => response.json())
.then(data => {
    console.log(data.image)
for(i = 0; i < data.length; i++){
    //partyPokemon1 image element and image value
    let partyPokeImg1 = document.createElement("img")
    partyPokeImg1.src = data[i].image;  
    pokemonTrainerMain.appendChild(partyPokeImg1)

}
});


//Container for oppPokemon
let bench2 = document.getElementById('bench2')
let pokemonOppTrainer = document.createElement("div");
pokemonOppTrainer.classList.add("pokemonOppTrainer");
pokemonOppTrainer.setAttribute('id','pokemonOppTrainer');

bench2.appendChild(pokemonOppTrainer);
//Opponents Attack  buttons
let oppAttack1 = document.createElement("button");
oppAttack1.classList.add("oppA1");
oppAttack1.setAttribute('id','oppA1');
let oppAttack2 = document.createElement("button");
oppAttack2.classList.add("oppA1");
oppAttack2.setAttribute('id','oppA2');
let oppAttack3 = document.createElement("button");
oppAttack3.classList.add("oppA1");
oppAttack3.setAttribute('id','oppA3');
let oppAttack4 = document.createElement("button");
oppAttack4.classList.add("oppA1");
oppAttack4.setAttribute('id','oppA4');

let oppAttackBox = document.getElementById("oppAttack")
oppAttackBox.appendChild(oppAttack1);
oppAttackBox.appendChild(oppAttack2);
oppAttackBox.appendChild(oppAttack3);
oppAttackBox.appendChild(oppAttack4);



// fetch("http://localhost:3000/pokedex?partyPokemon")
// .then(response => response.json())
// .then(data => {
//     console.log(data.image)
// for(i = 0; i < data.length; i++){
//     // //partyPokemon1 image element and image value
//     let oppPokeImg2 = document.createElement("img")
//     oppPokeImg2.src = data[i].image;  
//     pokemonOppTrainer.appendChild(oppPokeImg2)
// }
// });



    

// //oppPokemon1
// let oppPokemon1 = document.createElement("div");
// oppPokemon1.classList.add("oppPokemon1");
// oppPokemon1.setAttribute('id','oppPokemon1');
// //oppPokeImg1 image element and image value
// let oppPokeImg1 = document.createElement("img")
// oppPokeImg1.src = [i].image;

// //oppPokemon2
// let oppPokemon2 = document.createElement("div");
// oppPokemon2.classList.add("oppPokemon2");
// oppPokemon2.setAttribute('id','oppPokemon2');
// //oppPokeImg2 image element and image value
// let oppPokeImg2 = document.createElement("img")
// oppPokeImg2.src = [i].image;

// //oppPokemon3
// let oppPokemon3 = document.createElement("div");
// oppPokemon3.classList.add("oppPokemon3");
// oppPokemon3.setAttribute('id','oppPokemon3');
// //oppPokeImg3 image element and image value
// let oppPokeImg3 = document.createElement("img")
// oppPokeImg3.src = [i].image;

// //oppPokemon4
// let oppPokemon4 = document.createElement("div");
// oppPokemon4.classList.add("oppPokemon4");
// oppPokemon4.setAttribute('id','oppPokemon4');
// //oppPokeImg4 image element and image value
// let oppPokeImg4 = document.createElement("img")
// oppPokeImg4.src = [i].image;

// ////oppPokemon5
// let oppPokemon5 = document.createElement("div");
// oppPokemon5.classList.add("oppPokemon5");
// oppPokemon5.setAttribute('id','oppPokemon5');
// //oppPokeImg5 image element and image value
// let oppPokeImg5 = document.createElement("img")
// oppPokeImg5.src = [i].image;

// ////oppPokemon6
// let oppPokemon6 = document.createElement("div");
// oppPokemon6.classList.add("oppPokemon6");
// oppPokemon6.setAttribute('id','oppPokemon6');
// //oppPokeImg5 image element and image value
// let oppPokeImg5 = document.createElement("img")
// oppPokeImg5.src = [i].image;



// mainDivCon.appendChild(pokemonTrainerMain);
// mainDivCon.appendChild(pokemonOppTrainer);

