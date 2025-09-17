import express from 'express'


import thing1 from './script1.js'
import { details, other_details } from './script2.js';
import {doSomthing, doSomthing2} from './script3.js'

let port = 7001;
let app = express();

console.log('GIVE ME THE DATA FROM ',thing1);
console.log(details);
console.log(other_details);
doSomthing();
doSomthing2();
console.log('thanking you');

function hello(){
    console.log('hello world')
}
hello();



app.get("/",(req,res) => {
    res.send('This is message is for the backend');
})


app.listen(port,() => {
    console.log('Server is running on the port number ', port)
    console.log(port, port, port,port, port, port)
})