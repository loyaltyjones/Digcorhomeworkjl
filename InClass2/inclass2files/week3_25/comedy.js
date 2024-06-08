
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
     modal.style.display = "none";
   }
}


// Ticketmaster API

// fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=comedy&apikey=pjOyZm2wY8wpDMijKrvkbYyzGxigNnZH&city=atlanta')

// .then(response => response.json())
// .then(user => { 
// 	console.log(user);
// for(let i = 0; i < user._embedded.events.length; i++) {
// 	console.log(user);

//     let eventContainer = document.createElement('div');

//     let eventImage = document.createElement('img');
// 	let nameTag = document.createElement('p');
//     let timeTag = document.createElement('p');
//     let urlTag = document.createElement('p');
//     let addressTag = document.createElement('p');
//     let infoTag = document.createElement('p');

//     let eventImg = user._embedded.events[i].images[i].url;

//     eventImage.src = eventImg;
//     // eventImage.setAttribute() targets all images by the name given.. Example: "event-image" Use elements within the developer tools
//     // make sure to look up at developer tools to match up if it's correctly class = "event-image"
//     eventImage.setAttribute("class","event-image")
    
// 	nameTag.innerText = 'Name of the event: ' + user._embedded.events[i].name;
//     timeTag.innerText = 'date & time of the event: ' + user._embedded.events[i].sales.public.startDateTime;
//     urlTag.innerText = 'Url of the event: ' + user._embedded.events[i].url;
//     // by adding 0 into the second array, we are able to pull the first data within the object 
//     addressTag.innerText = 'Address of the event: ' + user._embedded.events[i]._embedded.venues[0].address.line1;
//     infoTag.innerText = 'Info: ' + user._embedded.events[i].info;
    
    
//     eventContainer.appendChild(eventImage);
//     eventContainer.appendChild(nameTag);
//     eventContainer.appendChild(addressTag);
//     eventContainer.appendChild(urlTag);
// 	eventContainer.appendChild(timeTag);
//     eventContainer.appendChild(infoTag);

// 	 document.body.appendChild(eventContainer);

// }
// });

// Random Joke API


// found the API website for us, that's free and make sure to check off the options of the jokes we don't want to use
// idea of using a forloop
// being able to implement getElementbyId --> inner.Text --> .appendChild("jokeTag")
// idea of refreshing a new joke using button or possibly doubleClick function

// fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=5')

// .then(response => response.json())
// .then(user => { 
// 	console.log(user);
// for(let i = 0; i < user.jokes.length; i++) {
// 	console.log(user);

// 	let jokesContainer = document.createElement('div');

// 	jokesContainer.classList.add("card");

// 	let categoryTag = document.createElement('p');
// 	 let typeTag = document.createElement('p');
// 	 let jokeTag = document.createElement('p');
// 	 let deliveryTag = document.createElement('p');


// 	categoryTag.innerText = 'Category: ' + user.jokes[i].category;
// 	typeTag.innerText = 'Types: ' + user.jokes[i].type;
// 	jokeTag.innerText = 'Jokes: ' + user.jokes[i].setup;
// 	deliveryTag.innerText = 'Delivery: ' +  user.jokes[i].delivery;


// 	jokesContainer.appendChild(categoryTag);
// 	jokesContainer.appendChild(typeTag);
// 	jokesContainer.appendChild(jokeTag);
// 	jokesContainer.appendChild(deliveryTag);

// 	 document.body.appendChild(jokesContainer);
// }
// })


// //.then(user => {
//     console.log(user);
//     for(let i=0; i < user.results.length; i++) {

// 		let jokeTag = document.getElementById('p')

// 		jokeTag.innerText = user

// 	}

// 	detailContainer.appendChild(jokeTag);
// 	document.body.appendChild(jokeContainer);
// 	// console.log(jokeTag);
// });

