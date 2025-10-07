import express from "express";
import router from "./routers/router.js";

let app = express();
let port = 8003;

app.use(router);
app.listen(port, () => {
    console.log("Currently you are on the port number", port)
})


// http://localhost:8003/home/ritesh/1453245/55/Mumbai