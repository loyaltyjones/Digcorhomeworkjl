let pokeArray = [
    {
        name:'Stufful',
        primary_type:'normal',
        secondary_type:'fighting',
        evolution_stage:1,
        region_of_origin:'Alola',
        height: `1' 08"`,
        weight_lbs: 15,
        bst: 340,
        image: "/images/StuffelNB.png",
        moves: {attack1: 'Tackle;Payback;Hammer Arm;Ice Punch'}

    },
    // ('Bounsweet', 'grass', NULL, 1, 'Alola', '1''00"', 7.1, 210,'https://img.pokemondb.net/artwork/avif/bounsweet.avif', '{Razor Leaf, Draining Kiss, Swift, Zen Headbutt}'),
    {
        name: 'Bounsweet',
        primary_type: 'grass',
        secondary_type: 'NULL',
        evolution_stage: 1,
        region_of_origin:'Alola',
        height:`1''00"`,
        weight_lbs: 7.1,
        bst: 210,
        image: '/images/bounsweetNB.png',
        moves: {attack1: 'Razor Leaf', attack2:'Draining Kiss', attack3:'Swift', attack4: 'Zen Headbutt'}
    },
    //('Comfey', 'fairy', NULL, NULL, 'Alola', '0''04"', 0.7, 485,'https://img.pokemondb.net/artwork/avif/comfey.avif', '{Vine Whip, Magical Leaf, Acrobatics, Pollen Puff}'),
    {
        name:'Comfey',
        primary_type:'fairy',
        secondary_type:'NULL',
        evolution_stage:'NULL',
        region_of_origin:'Alola',
        height:`0''04"`,
        weight_lbs: 0.7,
        bst: 485,
        image:'/images/comfeyNB.png',
        moves: {attack1: 'Vine Whip', attack2:'Magical Leaf', attack3:'Acrobatics', attack4: ' Pollen Puff'}
    },
    //('Kommo-o', 'dragon', 'fighting', 3, 'Alola', '5''3"', 172.4, 600,'https://img.pokemondb.net/artwork/avif/kommo-o.avif', '{Dragon Claw, Metal Claw, Earthquake, Body Press}'),
    {
        name:'Kommo-o',
        primary_type:'dragon',
        secondary_type:'fighting',
        evolution_stage:3,
        region_of_origin:'Alola',
        height:`5'03"`,
        weight_lbs: 172.4,
        bst: 600,
        image:'/images/kommo-oNB.png',
        moves: {attack1: 'Dragon Claw', attack2:'Metal Claw', attack3:'Earthquake', attack3: 'Body Press'}
    },
    {
        name:'Kommo-o',
        primary_type:'dragon',
        secondary_type:'fighting',
        evolution_stage:3,
        region_of_origin:'Alola',
        height:`5'03"`,
        weight_lbs: 172.4,
        bst: 600,
        image:'/images/kommo-oNB.png',
        moves: {attack1: 'Dragon Claw', attack2:'Metal Claw', attack3:'Earthquake', attack3: 'Body Press'}
    },
    {
        name:'Kommo-o',
        primary_type:'dragon',
        secondary_type:'fighting',
        evolution_stage:3,
        region_of_origin:'Alola',
        height:`5'03"`,
        weight_lbs: 172.4,
        bst: 600,
        image:'/images/kommo-oNB.png',
        moves: {attack1: 'Dragon Claw', attack2:'Metal Claw', attack3:'Earthquake', attack3: 'Body Press'}
    }

]










// pokemonTrainerMain.style.backgroundColor = "blue"


// mainDiv.appendChild(pokemonTrainerMain)


// //partyPokemon1
// let partyPokemon1 = document.createElement("div");
// partyPokemon1.classList.add("partyPokemon1");
// partyPokemon1.setAttribute('id','partyPokemon1');
// //partyPokemon1 image element and image value
// let partyPokeImg1 = document.createElement("img")
// partyPokeImg1.src = [i].image;

// //partyPokemon2       
// let partyPokemon2 = document.createElement("div");
// partyPokemon2.classList.add("partyPokemon2");
// partyPokemon2.setAttribute('id','partyPokemon2');
// //partyPokemon2 image element and image value
// let partyPokeImg2 = document.createElement("img")
// partyPokeImg2.src = [i].image;

// //partyPokemon3
// let partyPokemon3 = document.createElement("div");
// partyPokemon3.classList.add("partyPokemon3");
// partyPokemon3.setAttribute('id','partyPokemon3');
// //partyPokemon3 image element and image value
// let partyPokeImg3 = document.createElement("img")
// partyPokeImg3.src = [i].image;

// //partyPokemon4
// let partyPokemon4 = document.createElement("div");
// partyPokemon4.classList.add("partyPokemon4");
// partyPokemon4.setAttribute('id','partyPokemon4');
// //partyPokemon4 image element and image value
// let partyPokeImg4 = document.createElement("img")
// partyPokeImg4.src = [i].image;

// //partyPokemon5
// let partyPokemon5 = document.createElement("div");
// partyPokemon5.classList.add("partyPokemon5");
// partyPokemon5.setAttribute('id','partyPokemon5');
// //partyPokemon5 image element and image value
// let partyPokeImg2 = document.createElement("img")
// partyPokeImg2.src = [i].image;

// //partyPokemon6
// let partyPokemon6 = document.createElement("div");
// partyPokemon6.classList.add("partyPokemon6");
// partyPokemon6.setAttribute('id','partyPokemon6');
// //partyPokemon6 image element and image value
// let partyPokeImg6 = document.createElement("img")
// partyPokeImg6.src = [i].image;


//Main container
let mainDivCon = document.getElementById("mainDiv");



//Container for partyPokemon
let bench1 = document.getElementById('bench1')

//add comments
let pokemonTrainerMain = document.createElement("div");
pokemonTrainerMain.classList.add("pokemonTrainerMain");
pokemonTrainerMain.setAttribute('id','pokemonTrainerMain');

//Append PP 6 to side bar container???
bench1.appendChild(pokemonTrainerMain)

//Party Pokemon Attack buttons

//Attack1 PP button
let partyAttack1 = document.createElement("button");
partyAttack1.classList.add("partyA");
partyAttack1.setAttribute('id','partyA1');
partyAttack1.setAttribute("onclick",'partyUp')
// partyAttack1.onclick = partyUp
//Attack2 PP button
let partyAttack2 = document.createElement("button");
partyAttack2.classList.add("partyA");
partyAttack2.setAttribute('id','partyA2');
partyAttack2.setAttribute("onclick",'partyUp')
// partyAttack2.onclick = partyUp
//Attack3 PP button
let partyAttack3 = document.createElement("button");
partyAttack3.classList.add("partyA");
partyAttack3.setAttribute('id','partyA3');
partyAttack3.setAttribute("onclick",'partyUp')
// partyAttack3.onclick = partyUp
//Attack4 PP button
let partyAttack4 = document.createElement("button");
partyAttack4.classList.add("partyA");
partyAttack4.setAttribute('id','partyA4');
partyAttack4.setAttribute("onclick",'partyUp')
// partyAttack4.onclick = partyUp

//Append buttons to container
let partyAttBox = document.getElementById("partyAttack");
partyAttBox.appendChild(partyAttack1);
partyAttBox.appendChild(partyAttack2);
partyAttBox.appendChild(partyAttack3);
partyAttBox.appendChild(partyAttack4);

//PartyPokem Main(single character) Container
let ppMain = document.getElementById("centerParty")




for(j = 0; j < pokeArray.length;j++){
    // //partyPokemon1 image element and image value
    let partyPokeImg1 = document.createElement("img")
    partyPokeImg1.src = pokeArray[j].image;  
    pokemonTrainerMain.appendChild(partyPokeImg1);
    console.log(partyPokeImg1)

}




// Function move Pokemon from sidebar to Main fighting position
// pass in value or make mutiple functions??? 
// *index is set to change
// function partyUp(){ 
//     pokeArray[1].image =indexOneImg;
//     ppMain.appendChild(indexOneImg)
//  }

//  function strikeByPP(){

//  }


//Container for oppPokemon
let bench2 = document.getElementById('bench2')

//add comments
let pokemonOppTrainer = document.createElement("div");
pokemonOppTrainer.classList.add("pokemonOppTrainer");
pokemonOppTrainer.setAttribute('id','pokemonOppTrainer');

//Append Opp 6 to sidebar container???
bench2.appendChild(pokemonOppTrainer);

//Opponents Attack  buttons
//Attack1 Opp button
let oppAttack1 = document.createElement("button");
oppAttack1.classList.add("oppA");
oppAttack1.setAttribute('id','oppA1');
oppAttack1.setAttribute("onclick",'oppUp()')
// oppAttack1.onclick = 
//Attack2 Opp button
let oppAttack2 = document.createElement("button");
oppAttack2.classList.add("oppA");
oppAttack2.setAttribute('id','oppA2');
oppAttack2.setAttribute("onclick",'oppUp()')
// oppAttack1.onclick = 
//Attack3 Opp button
let oppAttack3 = document.createElement("button");
oppAttack3.classList.add("oppA");
oppAttack3.setAttribute('id','oppA3');
oppAttack3.setAttribute("onclick",'oppUp()')
// oppAttack2.onclick = 
//Attack4 Opp button
let oppAttack4 = document.createElement("button");
oppAttack4.classList.add("oppA");
oppAttack4.setAttribute('id','oppA4');
oppAttack4.setAttribute("onclick",'strikeByOpp()')
// oppAttack3.onclick = 

let oppAttackBox = document.getElementById("oppAttack")
oppAttackBox.appendChild(oppAttack1);
oppAttackBox.appendChild(oppAttack2);
oppAttackBox.appendChild(oppAttack3);
oppAttackBox.appendChild(oppAttack4);
// oppAttack4.onclick = 

//Opponent Main(single character) Container
let oppMain = document.getElementById("centerOpp")

// }
let indexOneImg = document.createElement("img")
indexOneImg.src = pokeArray[0].image;

// oppAttack1.onclick = oppUp
//Function move Opp Pokemon from sidebar to Main fighting position
//pass in value or make mutiple functions???
function oppUp(){ 
   
    oppMain.appendChild(indexOneImg)
 }



for(i = 0; i < pokeArray.length;i++){


    // //partyPokemon1 image element and image value
    let oppPokeImg2 = document.createElement("img")
    oppPokeImg2.src = pokeArray[i].image;  
    pokemonOppTrainer.appendChild(oppPokeImg2)
}



 function strikeByOpp(){
  

}


    







    

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






