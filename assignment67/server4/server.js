import express from "express";
import dotenv from "dotenv";
import router from './routers/router.js';
import ejs from 'ejs';

dotenv.config({path: "./config.env"})

let app = express();
let port = process.env.PORT;

app.use(express.static('public'));
app.set('view engine','ejs')


app.use(router)
app.listen(port, () => {
    console.log('currently we are running on the port number ',port)
})

/*
app.get("/",(request, response) => {
    response.send('This is the response send for the webpage');
})
app.listen(port, () => {
    console.log('We are currently running on the port number', port);
})
*/