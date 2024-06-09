

// INSERT INTO pokedex (name, primary_type, secondary_type, evolution_stage, region_of_origin, height, weight_lbs, bst, image, moves)
// VALUES ('Stufful', 'normal', 'fighting', 1, 'Alola', '1''08"', 15, 340,'https://img.pokemondb.net/artwork/avif/stufful.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
//     ('Bounsweet', 'grass', NULL, 1, 'Alola', '1''00"', 7.1, 210,'https://img.pokemondb.net/artwork/avif/bounsweet.avif', '{Razor Leaf, Draining Kiss, Swift, Zen Headbutt}'),
//     ('Comfey', 'fairy', NULL, NULL, 'Alola', '0''04"', 0.7, 485,'https://img.pokemondb.net/artwork/avif/comfey.avif', '{Vine Whip, Magical Leaf, Acrobatics, Pollen Puff}'),
//     ('Kommo-o', 'dragon', 'fighting', 3, 'Alola', '5''3"', 172.4, 600,'https://img.pokemondb.net/artwork/avif/kommo-o.avif', '{Dragon Claw, Metal Claw, Earthquake, Body Press}'),

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
        }

    ]

// 
const goTime = document.getElementById("pokeBut");
goTime.addEventListener("click", getPoke);
goTime.addEventListener("click", getPoke2);


//funtion to get pokemon1
function getPoke(){

    for(i = 0; i < pokeArray.length;i += Math.floor(Math.random()* 5)){
       
        let pokeImg = pokeArray[i].image;
        let imgelement = document.getElementById("pokemonSprite1")
        imgelement.src = pokeImg;
        imgelement.style.display = "block"

        document.getElementById("pokeMon1").innerHTML = (`Name: ${pokeArray[i].name}<br>Primary Type: ${pokeArray[i].primary_type}<br>Secondary Type: ${pokeArray[i].secondary_type}<br>Evolution Stage: ${pokeArray[i].evolution_stage}<br>Region: ${pokeArray[i].region_of_origin}<br>Height: ${pokeArray[i].height}<br>Weight Lbs: ${pokeArray[i].weight_lbs}<br>BST: ${pokeArray[i].bst}<br>${pokeArray[i].image}<br>Attacks: ${pokeArray[i].moves.attack1}`)

    };
}
//function to get pokemon2
function getPoke2(){

    for(i = 0; i < pokeArray.length; i += Math.floor(Math.random()* 5)){
        console.log(pokeArray[i].name)

        let pokeImg2 = pokeArray[i].image;
        let imgelement2 = document.getElementById("pokemonSprite2")
        imgelement2.src = pokeImg2;
        imgelement2.style.display = "block"


    document.getElementById("pokeMon2").innerHTML = (`Name: ${pokeArray[i].name}<br>Primary Type: ${pokeArray[i].primary_type}<br>Secondary Type: ${pokeArray[i].secondary_type}<br>Evolution Stage: ${pokeArray[i].evolution_stage}<br>Region: ${pokeArray[i].region_of_origin}<br>Height: ${pokeArray[i].height}<br>Weight Lbs: ${pokeArray[i].weight_lbs}<br>BST: ${pokeArray[i].bst}<br>${pokeArray[i].image}<br>Attacks: ${pokeArray[i].moves.attack1}`);
};
};



