const pgp = require('pg-promise')();
//Food delight
const db = pgp("postgres://rrermifn:mJO35jyo0b1v2FSRMCRgXeoc-qFcC8YF@ziggy.db.elephantsql.com/rrermifn");
// const db = pgp("postgres://corcoding@localhost:5432/postgres");
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.json());



let todos = [];
let number_of_todos = 1;


app.get('/', (req, res) => {
    res.json({ todos });
});


//get from Fooddelight
app.get('/menu', async (req, res) => {
  if(Object.keys(req.body).length != 0) {
    clientError(req, "Request body is not permitted at this endpoint", 400);
    res.status(400).json({error: "Request body is not permitted at this endpoint"});
  } 
  // Makes sure that client only 4 query param (name, type, region, abilities)
  else if(Object.keys(req.query).length > 1) {
      clientError(req, "Query parameters do not meet the requirements", 400);
      res.status(400).json({error: "Query parameters do not meet the requirements length"});
  } 
  // Makes sure that client put in an ID that is a number
  else if(isNaN(req.query.id) && req.query.id != undefined) {
      clientError(req, "ID is not a number", 400);
      res.status(400).json({error: "ID is not a number"});
  } 
  else {
      if(req.query.all === '') {
          res.json(await db.any('SELECT * FROM food'));
      }
  }
  
});

//submit form
// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});






// Handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email } = req.body;

  // Insert data into the database
  db.none('INSERT INTO users(name, email) VALUES($1, $2)', [name, email])
    .then(() => {
      res.send('Data inserted successfully');
    })
    .catch(error => {
      console.error('Error inserting data:', error);
      res.status(500).send('Error inserting data');
    });
});




app.post('/', (req, res) => {
  let newTodo = req.body.todo;
  if(req.body.list == undefined){
  todos.push({id: number_of_todos++, newTodo, completed: false});
  res.json('Todo has been added');
  } else if(req.body.list.length > 0){
      for(let i=0; i < req.body.list.length; i++){
          todos.push({id: number_of_todos++, todo: req.body.list[i].todo, completed: false});
      }
      res.json("Bulk Insert");
}
});

app.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedFields = req.body;
  for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
          todos[i] = { ...todos[i], ...updatedFields };
          res.send('Todo updated successfully');
          return;
      }
  }
  res.send('Todo not found');
}) 

app.delete('/:id', (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
          todos.splice(i, 1);
          res.send('Todo deleted successfully');
          return;
      }
  }
  res.send('Todo not found');
})

app.listen(port, () => {
  console.log("server is running on port 3000")
})
