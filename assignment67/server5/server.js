// version 1

/*
import express from 'express';

let app = express();
let port = 7005;

app.get('/', (request, response) => {
    response.send('THIS RESPONSE IS FOR THE BROWSER.');
});

app.listen(port, () => {
    console.log('Currently you are on the port number', port);
});
*/


// version 2

/*
import express from "express";
import router from './routers/router.js'


let app = express();
let port = 7005;

app.use(router)
app.listen(port,() => {
    console.log('Your port number is', port)
})
*/


// version 3 

import express from "express";
import router from './routers/router.js';
import ejs from "ejs";

let app = express();
let port = 7005;


app.use(express.urlencoded({extended:true}));   // to get form data


app.use(express.static("public"))  
// public folder

app.set("view engine", "ejs") 
//for view folder


app.use(router)

app.listen(port,() => {
    console.log('Your port number is', port)
});

