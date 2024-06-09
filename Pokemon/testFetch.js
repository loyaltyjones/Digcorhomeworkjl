fetch('http://localhost:3000/pokedex')
    .then(resp =>  resp.json())
    .then(data => console.log(data));
