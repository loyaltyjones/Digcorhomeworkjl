
let client = 0

console.log("Running foodelight page")
fetch('http://localhost:3000/menu?all')
    .then((response) => response.json())
    .then((data) => {
        for (let i=0; i< data.length; i++){
            console.log(data)

            let foodContainer = document.getElementById("characterContainer");
            let foodCard = document.createElement("div");
            foodCard.classList.add("card");
            foodCard.setAttribute('id',client)

            // food image element
            let foodImage = document.createElement("img");

            //label
            let label = document.createElement("label")

            //Input
            let input = document.createElement("input")

            // Tags
            let foodNameTag = document.createElement("p");
            let foodTypeTag = document.createElement("p");
            let foodDescriptionTag = document.createElement("p");
            let foodPriceTag = document.createElement("p");

            // Values
            foodNameTag.innerText = "Name: " + data[i].name;
            foodTypeTag.innerText = "Type: " + data[i].type;
            foodDescriptionTag.innerText = "Description: " + data[i].description;
            foodPriceTag.innerText = "Price: $" + data[i].price;

            // Link image to src
            foodImage.src = data[i].img;

            // appendchild
            foodCard.appendChild(foodImage);
            foodCard.appendChild(foodNameTag);
            foodCard.appendChild(foodTypeTag);
            foodCard.appendChild(foodDescriptionTag);
            foodCard.appendChild(foodPriceTag);
            foodCard.appendChild(input);
            foodCard.appendChild(label);
    ;

            foodContainer.appendChild(foodCard);
            client++

            }
    });
