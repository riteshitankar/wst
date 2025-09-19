import express from 'express'
import {getHome, getAnotherRoute} from "../controllers/control.js"

let router = express.Router();
 
/*
router.get('/',(req,res) => {
    res.status(200).send('hello user');
})

router.get('/another-route',(req,res) => {
    res.status(200).send('hello another user again');
})
*/


// above as the method to send the data directly from the router now we will get a data in the router from the controller then send it to the server

router.get('/',getHome);
router.get('/another-route',getAnotherRoute);



export default router;