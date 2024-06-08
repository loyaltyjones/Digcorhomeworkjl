//Imports express from the node_modules folder
const express = require('express')

const app = express()
app.use(express.json())
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json

let mockUsers = [
    {id:1, username: "anson", displayName: "Anson"},
    {id:2, username: "jack", displayName: "Jack"},
    {id:3, username: "adam", displayName: "Adam"},
    {id:4, username: "tina", displayName: "Tina"},
    {id:5, username: "jason", displayName: "Jason"},
    {id:6, username: "henry", displayName: "Henry"},
    {id:7, username: "marilyn", displayName: "Marilyn"},
];

app.get("/",(req,res)=>{
    res.send({msg:"hello,hello"});
});



app.get("/api/users",(req,res)=>{
    console.log(req.query);
    const{ query: {filter,value },
} = req;

if(filter && value)
return res.send(mockUsers.filter((user)=> user[filter].includes(value)));

return res.send(mockUsers);

});

app.post("/api/users",(req,res)=>{
    console.log(req.body);
    return res.send(200);
});



app.get('/api/users/:id',(req,res)=>{
    console.log(req.params);
    const parsedId = parseInt(req.params.id);
    if(isNaN(parsedId))
        return res.status(400).send({msg: "Bad request. Invalid Id"});

    const findUser = mockUsers.find((user) => user.id === parsedId);
    if(!findUser) return res.sendStatus(404);
    return res.send(findUser);   
});

app.put("/api/users/:id",(req,res)=> {
    const {
        body,
        params: { id },
    }= req;
    const parsedId = parseInt(id);
    if(isNaN(parsedId)) return res.sendStatus(400);
    const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
    if(findUserIndex === -1) return res.sendStatus(404);
    mockUsers[findUserIndex] = {id: parsedId,...body};
    return res.sendStatus(200);
});

app.patch("/api/users/:id",(req,res,)=>{
    const {
        body,
        params: { id },
    }= req;
    const parsedId = parseInt(id);
    if(isNaN(parsedId)) return res.sendStatus(400);
    const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
    if(findUserIndex === -1) return res.sendStatus(404);
    mockUsers[findUserIndex] = {...mockUsers[findUserIndex],...body};
    return res.sendStatus(200);



})
app.get("/api/products",(req,res)=>{
    res.send([{id:123, name:"chicken breats", price: 12.99}])
})


app.listen(5000, ()=> {
    console.log("Server is running on port 5000");
})