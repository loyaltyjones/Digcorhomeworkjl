
const pg = require('pg-promise')();
const db = pg("postgres://corcoding@localhost:5432/postgres")
const express = require('express');
const winston = require('winston');

const app = express()
const bodyParser = require("body-parser") // for parsing application/json
app.use(bodyParser.json())

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });

  function clientError(req, message, errorCode) {
    logger.log({
        level: "info",
        endpoint: req.path,
        method: req.method,
        query_parameters: req.query,
        path_parameters: req.params,
        body: req.body,
        ip: req.ip,
        errorCode: errorCode,
        message: message,
        timestamp: new Date(),
    })
}



// Justin GET
app.get('/pokedex', async function(req, res) {
    let pokedex = await db.any('SELECT * FROM pokedex;');
    if(Object.keys(req.body).length != 0) {
        clientError(req, "Request body is not permitted", 400);
        // check if a body was provided in the request
        res.status(400).json({
            error: "Request body is not permitted"
        });
    } 
    else {
        // else is the success case
        if(req.query.id == undefined) {
            // check if an id was passed or not from the client
            // if not, return all todos
            res.json({pokedex})
        } else {
            let id = req.query.id;
            let pokemonId = await db.query('SELECT * FROM pokedex WHERE id = $1', [id])
            res.json(pokemonId);
        }
    }
});


// Marcus POST



// Joel PUT

// app.put('/pokedex/:name', async function(req, res) {
//     const name = req.params.name;
//     console.log(req.params)
//     let updatePokemon = await db.query(`UPDATE pokedex SET name = $1 WHERE id =$2`,['tooby',5]);
//     res.json(name);
//     console.log(name)
// });


// app.put('/pokedex/:name', async function(req, res) {
//     const name = req.params.name;
//     let updateName = req.body.name;
    
    
//     /* hp attack defense weakness region */
//     console.log(req.params)
//     let updatedPokemon = await db.query(`UPDATE pokedex SET name = $1 WHERE name =$2 RETURNING *`,[updateName, name]);
//     res.json(updatedPokemon);
//     console.log(name)
// });

app.put('/pokedex/:name', async function(req, res) {
    const nameInput = req.params.name;
    //let updateName = req.body.name;
    const {name,primary_type,secondary_type,evolution_stage,region_of_origin,height,weight_lbs,bst} = req.body
  mon  //const updateProperties = req.body;
    /* hp attack defense weakness region */
    console.log(req.params);

    if(req.body.name == undefined) {
        clientError(req, "Request body is not permitted", 400);
        res.status(400).json({error: "All properties must have a value"});
    }
    else if (req.body.primary_type == undefined) {
        clientError(req, "Request body is not permitted", 400);
        res.status(400).json({error: "All properties must have a value"});
    }
    else if (req.body.secondary_type == undefined) {
        clientError(req, "Request body is not permitted", 400);
        res.status(400).json({error: "All properties must have a value"});
    }
    else if (req.body.evolution_stage == undefined) {
        clientError(req, "Request body is not permitted", 400);
        res.status(400).json({error: "All properties must have a value"});
    }
    else if (req.body.region_of_origin == undefined) {
        clientError(req, "Request body is not permitted", 400);
        res.status(400).json({error: "All properties must have a value"});
    }
    else if (req.body.height == undefined) {
        clientError(req, "Request body is not permitted", 400);
        res.status(400).json({error: "All properties must have a value"});
    }
    else if (req.body.weight_lbs == undefined) {
        clientError(req, "Request body is not permitted", 400);
        res.status(400).json({error: "All properties must have a value"});
    }
    else if (req.body.bst == undefined) {
        clientError(req, "Request body is not permitted", 400);
        res.status(400).json({error: "All properties must have a value"});
    }
    else{
    
    let updatedPokemon = await db.query(`UPDATE pokedex SET name =$1, primary_type=$2,secondary_type=$3,evolution_stage=$4, region_of_origin=$5, height=$6, weight_lbs=$7, bst=$8 WHERE name =$9 RETURNING *`,[name,primary_type,secondary_type,evolution_stage,region_of_origin,height,weight_lbs,bst, nameInput]);
    res.json(updatedPokemon);
    console.log(name)
    console.log(nameInput)
    console.log(primary_type)
    console.log(name,primary_type,secondary_type,evolution_stage,region_of_origin,height,weight_lbs,bst)
    }

});







// const {name,
//     primary_type,
//     secondary_type,
//     evolution_stage,
//     region_of_origin,
//      height,
//      weight_lbs,
//      bst} = req.body






// Below code updated all names in pokemon table to test
// UPDATE pokemon SET name = 'test';
//Reference from website
    // const updateUser = (request, response) => {
    //     const id = parseInt(request.params.id)
    //     const { name, email } = request.body
      
    //     pool.query(
    //       'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    //       [name, email, id],
    //       (error, results) => {
    //         if (error) {
    //           throw error
    //         }
    //         response.status(200).send(`User modified with ID: ${id}`)
    //       }
    //     )
    //   }


// David DELETE


app.listen(5000, () => {
    console.log("Server is running on port 5000");
})





// fetch("http://localhost:5000/pokedex")
// .then((response) => response.json())
// .then((data) => 
// console.log(data));