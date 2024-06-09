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



fetch("http://localhost:3000/pokedex?partyPokemon")
.then(response => response.json())
.then(data => {
    console.log(data.image)
for(j = 0; j < data.length; j++){
    // //partyPokemon1 image element and image value
    let oppPokeImg2 = document.createElement("img")
    oppPokeImg2.src = data[j].image;  
    pokemonOppTrainer.appendChild(oppPokeImg2)
}
});
