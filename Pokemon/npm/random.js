
// function fetchpoke(){

// const { response } = require("express");

// const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

// fetch(
//   "http://localhost:3000/users"
// )
//   .then((data2) => data2.json())
//   .then((apiData) => {
   
//     // console.log(apiData.pokedex[random(0, apiData.pokedex.length)])


//     const displyText = apiData.pokedex[random(0, apiData.pokedex.length)].name
//     const displayName = document.getElementById("displayName");
//     displayName.innerHTML = displyText;

//     const displyText2 = apiData.pokedex[random(0, apiData.pokedex.length)]
//     const displayName2 = document.getElementById("displayName2");
//     displayName2.innerHTML = displyText2;
    
//   });

// }


function fetchpoke(){


fetch('http://localhost:3000/pokedex')
.then(response => response.json())
.then(data =>{
// console.log(data)

    // //Random Pokemon Generator
    let pokeOne = data.pokedex[Math.floor(Math.random() * data.pokedex.length)];
    let pokeTwo = data.pokedex[Math.floor(Math.random() * data.pokedex.length)];
    console.log(pokeOne)


    //Random Pokemon1 image
    let pokeImg = pokeOne.image;
    let imgelement = document.getElementById("pokemonSprite1")
    imgelement.src = pokeImg;
    imgelement.style.display = "block"

    //Random Pokemon1 stats
    document.getElementById("pokeMon1").innerHTML = (`Name: ${pokeOne.name}<br>Primary Type: ${pokeOne.primary_type}<br>Secondary Type: ${pokeOne.secondary_type}<br>Evolution Stage: ${pokeOne.evolution_stage}<br>Region: ${pokeOne.region_of_origin}<br>Height: ${pokeOne.height}<br>Weight Lbs: ${pokeOne.weight_lbs}<br>BST: ${pokeOne.bst}<br>${pokeOne.image}<br>Attacks: ${pokeOne.moves}`)

    
    //Random Pokemon2 image
    let pokeImg2 = pokeTwo.image;
    let imgelement2 = document.getElementById("pokemonSprite2")
    imgelement2.src = pokeImg2;
    imgelement2.style.display = "block"

    //Random Pokemon1 stats
    document.getElementById("pokeMon2").innerHTML = (`Name: ${pokeTwo.name}<br>Primary Type: ${pokeTwo.primary_type}<br>Secondary Type: ${pokeTwo.secondary_type}<br>Evolution Stage: ${pokeTwo.evolution_stage}<br>Region: ${pokeTwo.region_of_origin}<br>Height: ${pokeTwo.height}<br>Weight Lbs: ${pokeTwo.weight_lbs}<br>BST: ${pokeTwo.bst}<br>${pokeTwo.image}<br>Attacks: ${pokeTwo.moves}`);
  });

};






  


        
        
        
        
