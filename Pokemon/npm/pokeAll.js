// function to fecth Pokemon
function fetchData(){
    fetch("http://localhost:3000/pokedex")
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.pokedex.length; i++){
           
    //Main container for Pokemon
    let dexContainer = document.getElementById("pokemonContainer");

    //Container for P tags and image with class of "card"
    let pokedexCard = document.createElement("div");
    pokedexCard.classList.add("card")

    //Image
    let pokemonImage = document.createElement("img")

    //Create P Tags
    let pokemNameTag = document.createElement("p");
    let pokemPrimeTag = document.createElement("p");
    let pokemSecondTag = document.createElement("p");
    let pokemEvoTag = document.createElement("p");
    let pokemRegionTag = document.createElement("p");
    let pokemHeightTag = document.createElement("p");
    let pokemweightTag = document.createElement("p");
    let pokemBstTag = document.createElement("p");
    let pokemimageTag = document.createElement("p");
    let pokemMovesTag = document.createElement("p");
    
    //Add values to P tags = Pokemon stats
    pokemNameTag.innerHTML = "Name: " + data.pokedex[i].name
    pokemPrimeTag.innerHTML = "Primary Type: " + data.pokedex[i].primary_type
    pokemSecondTag.innerHTML = "Secondary Type: " + data.pokedex[i].secondary_type
    pokemEvoTag.innerHTML = "Evolution Stage: " + data.pokedex[i].evolution_stage
    pokemRegionTag.innerHTML = "Region: " + data.pokedex[i].region_of_origin
    pokemHeightTag.innerHTML = "Height: " + data.pokedex[i].height
    pokemweightTag.innerHTML = "Weight Lbs: " + data.pokedex[i].weight_lbs
    pokemBstTag.innerHTML = "Base Stat Total: " + data.pokedex[i].bst
    pokemMovesTag.innerHTML = "Moves: " + data.pokedex[i].moves

    //Add image source
    pokemonImage.src = data.pokedex[i].image;

    //Add image-appendChild to P tag
    pokedexCard.appendChild(pokemimageTag);

    //Add Pokemon stats-appendChild to P tags
    pokedexCard.appendChild(pokemonImage);
    pokedexCard.appendChild(pokemNameTag);
    pokedexCard.appendChild(pokemPrimeTag);
    pokedexCard.appendChild(pokemSecondTag);
    pokedexCard.appendChild(pokemEvoTag);
    pokedexCard.appendChild(pokemRegionTag);
    pokedexCard.appendChild(pokemHeightTag);
    pokedexCard.appendChild(pokemweightTag);
    pokedexCard.appendChild(pokemBstTag);
    pokedexCard.appendChild(pokemMovesTag);
  
    //Add Pokemon image and stats to one container-add P tags to Div
    dexContainer.appendChild(pokedexCard)
 }    
});
}
