//Imports express from the node_modules folder
const express = require("express");
const app = express();
const winston = require("winston");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsDocs = YAML.load("./api.yaml");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

let todos = [];
let number_of_todos = 1;
let clientID = 1;

// Create a specified log for client errors
function clientError(req, message, errorCode) {
  clientID++;
  logger.log({
    level: "info",
    endpoint: req.path,
    method: req.method,
    query_parameters: req.query,
    path_paramters: req.params,
    body: req.body,
    ip: req.ip,
    error: errorCode,
    message: message,
    timestamp: new Date(),
  });

  /*
      Middleware:
      Creates a log for every API call
    */
  app.all("/*", (req, res, next) => {
    logger.log({
      level: "info",
      endpoint: req.path,
      method: req.method,
      query_parameters: req.query,
      path_paramters: req.params,
      body: req.body,
      ip: req.ip,
      timestamp: new Date(),
    });
    next();
  });
}

// GET requests should never have a body

/*
Endpoint:
returns a list of all todos, if an id is provided, only a single todo is returned
Query Parameters:
id[number]: the id of the todo
*/
app.get("/todo", function (req, res) {
  console.log(req.query);
  // Check if a body was provided in the request
  if (Object.keys(req.body).length != 0) {
    clientError(req, "Request body is not permitted", 400);
    res.statusCode = 400;
    res.json({ error: "Query Parameters do not meet requirements" });
  } else if (Object.keys(req.query).length > 1) {
    clientError(req, "Request body is not permitted", 400);
    res.statusCode = 400;
    res.json({ error: "Query Parameters do not meet requirements" });
  } else {
    // Check if an id was passed from the client, if no, return all todos
    if (req.query.id == undefined) {
      res.json({ todos });
    }
    // If an id is passed, only one todo will be returned
    else {
      // Client task is a placeholder to determine if a match was found
      // If no task with the provided ID was found, clientTask will remain
      // and empty object. If a match is found, then the task will be stored
      // inside of the clientTask variable
      let clientTask = {};
      // Searching through the tasklist for a matching id
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == req.query.id) {
          // Match was found, save it to clientTask
          clientTask = todos[i];
        }
      }
      // Match not found, return error

      //Object.keys() return the object as an array. Every array has a built in
      // lenght property that we can use to check if the array, or in this case
      // object was empty
      if (Object.keys(clientTask).length === 0) {
        clientError(req, "Todo with that id not found", 400);
        res.statusCode = 400;
        res.json({ error: "Todo with that id not found" });
      } else {
        // Send back matching result
        res.json(clientTask);
      }
    }
  }
});

/*
Endpoint:
Adds a todo to the list. If a list parameter is provided it add multiple todos in one
call.

Body: 
todo[string](required)[No special characters]: the task to be added to the todolist
list:(array):contains a list of todos
*/
app.post("/todo", function (req, res) {
  console.log(req.body.list);
  const regex = /^[a-zA-Z0-9]+$/;
  // Every() Searches through the array and passes items that meets regext.test() conditions
  if (req.body.list.every((item) => regex.test(item.todo))) {
    if (req.body.list == undefined) {
      // Add a single todo
      todos.push({
        id: number_of_todos,
        todo: req.body.todo,
        completed: false,
        something: true,
      });
      res.json({ todo: todos[-1] });
    } else if (req.body.list.length > 0) {
      for (let i = 0; i < req.body.list.length; i++) {
        todos.push({
          id: number_of_todos++,
          todo: req.body.list[i].todo,
          completed: false,
        });
      }
      res.json("Bulk Insert");
    }
  } else {
    clientError(req, "incorrect characters", 400);
    return res.status(400).json({ msg: "incorrect characters" });
  }
});

/*
Endpoint: 
Updates an existing todo and modifies its data

Path parameter:
id[number](required): the id of task to be updated in the todolist

Body:
todo[string][No special characters]: the task to be updated
completed[booliean](required): the status of the task
*/
app.put("/todo/:id", (req, res) => {
  const regex = /^[a-zA-Z0-9]+$/;
  console.log(req.body.todo);
  //if an input does not pass the regex test an error 400 will occur
  if (!regex.test(req.body.todo)) {
    clientError(req, "incorrect characters", 400);
    return res.status(400).json({ msg: "incorrect characters" });
    //Only booleans are allowed under completed
  }
  if (typeof(req.body.completed) !== "boolean") {
    clientError(req, "error: Invalid input", 400);
    return res.status(400).json({ msg: "Invalid input" });
  }
  //Only accepts numbers as an Id
  if (isNaN(Number(req.params.id))) {
    clientError(req, "error: invalid Parameters", 400);
    return res.status(400).json({ msg: "invalid Parameters" });
  } // Only accepts the current Id's available.
  const user = todos.find((user) => user.id === Number(req.params.id));
  if (!user) {
    clientError(req, "error: invalid Parameters", 400);
    res.status(400);
    res.json(" error: invalid Parameters");
  }
  // Req.params returns paramters that are passed through the path(url)
  let match;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == req.params.id) {
      if (req.body.todo != undefined) {
        todos[i].todo = req.body.todo;
      }
      if (req.body.completed != undefined) {
        todos[i].completed = req.body.completed;
      }
    }
    match = todos[i];
  }
  res.json(todos[match]);
});

/*
Endpoint: 
Deletes an existing todo

Path parameter:
id[number](required): the id of task to be updated in the todolist
*/
app.delete("/todo/:id", (req, res) => {
  console.log(Number(req.query.id));
  // Only Accepts numbers as an id
  if (isNaN(Number(req.params.id))) {
    clientError(req, "error: invalid Parameters", 400);
    res.status(400);
    res.json("error: invalid Parameters");
  } else {
    // Only accepts the current available id's
    const users = todos.find((users) => users.id === Number(req.params.id));
    if (!users) {
      clientError(req, "error: invalid Parameters", 400);
      res.status(400);
      res.json(" error: invalid Parameters");
    }
    let temp;
    // Search through the array for a todo that has an id that matches the client's request
    for (let i = 0; i < todos.length; i++) {
      // Once the matching id is found delete from the array
      if (todos[i].id == req.params.id) {
        temp = todos[i];
        todos.splice(i, 1);
      }
    }
    res.json(temp);
  }
});

// Opens up a port on your computer for the server to listen to
// incoming requests
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
