// fetch("http://localhost:3000/pokedex")
// .then((response) => response.json())
// .then((data) => 
// console.log(data));
// for(let i = 0; i < 1; i++){
//     let bounsweet = data.pokedex[0];
//     let comfey = data.pokedex[1];
//     // console.log(bounsweet,comfey)
// }
// const pokemonSprite = data.pokedex[0].image
// console.log(pokemonSprite)
// const imgElement = document.getElementById("pokemonSprite");
// imgElement.src = pokemonSprite;
// imgElement.style.display = "block";
// // let bounsweetImg = document.createElement("img")
// // document.body.appendChild(bounsweetImg);

// });
// fetchData();
// async function fetchData(){
//     try{
        
//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//         const response = await fetch(`http://localhost:3000/pokedex/`);
//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }
//         const data = await response.json();
//         const pokemonSprite = data.pokedex[0].image
//         const imgElement = document.getElementById("pokemonSprite");

//         imgElement.src = pokemonSprite;
//         imgElement.style.display = "block";
//         console.log(data);
//     }
//     catch(error){
//         console.error(error);

//     }

document.getElementById("pokeMon2").innerHTML = "Hello World";

// }
//function getUsers() {


    // Call the Pokedex database
    fetch('http://localhost:3000/pokedex')
    .then(resp =>  resp.json())
    .then(data => {
            console.log(data);
        for(let i = 0; i < data.pokedex.length; i++) {
        console.log(data.pokedex[i].name)
        //Container
        let pokedexContainer = document.getElementById("pokeMon1");
        let pokedexdCard = document.createElement("div");
        // pokedexdCard.classList.add("card")
        //P tags
        let pokemonName = document.createElement("p");
        //P tags values
        pokemonName.innerText = data.pokedex[i].name
        //P tags append to div
        pokedexdCard.appendChild(pokemonName)
        //Append container to HTML 
        pokedexContainer.appendChild(pokedexdCard)
 }

        //     // Create an image element for a user
        //     //let userImage = document.createElement("img");

        //     // Create a p tag for each relevant piece of user info
        //     //let nameTag = document.createElement("p");
        //     // let genderTag = document.createElement("p");
        //     // let emailTag = document.createElement("p");
        //     // let phoneTag = document.createElement("p");
        //     // let nameTag = document.createElement("p");
        //     // let genderTag = document.createElement("p");
        //     // let emailTag = document.createElement("p");
        //     // let phoneTag = document.createElement("p");


        //     // Add the values for gender, email, and phone to our newly created tags
        //     //genderTag.innerText = user.results[i].gender;
        //     // emailTag.innerText = user.results[i].email;
        //     // phoneTag.innerText = user.results[i].phone;
        //     //nameTag.innerText = user.results[i].name.first + " " + user.results[i].name.last;;
        //     // genderTag.innerText = user.results[i].gender;
        //     // emailTag.innerText = user.results[i].email;
        //     // phoneTag.innerText = user.results[i].phone;
        //     // nameTag.innerText = data.pokedex[i].name

        //     // Add user image
        //     //userImage.src = data.pokedex[i].image;

        //     // Append each of our p tags to the div container
        //     // detailedContainer.appendChild(userImage);
        //     //detailedContainer.appendChild(nameTag);
        //     // detailedContainer.appendChild(genderTag);
        //     // detailedContainer.appendChild(emailTag);
        //     // detailedContainer.appendChild(phoneTag);
            

        //     // Finally we add the entire container to the body
        //     //document.body.appendChild(detailedContainer);
        //     console.log(data.pokedex[i].name)
   
            
        // }

    });

//getUsers();

//data.data.pokedex[i].name

//name,primary_type,secondary_type,evolution_stage,region_of_origin,height,weight_lbs,bst} 