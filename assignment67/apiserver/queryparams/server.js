import express from "express";
import router from "./routers/router.js"

let app = express();
let port = 8002;

app.use(router);
app.listen(port, ()=>{
    console.log('You are on the port number',port)
})