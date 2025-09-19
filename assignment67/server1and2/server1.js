import express from 'express'


import thing1 from './script1.js'
import { details, other_details } from './script2.js';
import {doSomthing, doSomthing2} from './script3.js'
import {name1} from './script4.js'


// to get multiple named export from the the same file 
import {detail1 as newdetail1, detail2 as newdetail2} from './scriptas1.js'

// same term using *
import * as xyz from './scriptas1.js'

// import 

let port = 7001;
let app = express();

console.log('GIVE ME THE DATA FROM ',thing1);
console.log(details);
console.log(other_details);
doSomthing();
doSomthing2();
console.log(name1('girish'));
console.log(name1('ramesh'));
console.log(name1('suresh'));
console.log(name1('dinesh'));
console.log(name1('naresh'));
console.log(name1('gyanesh'));
console.log(name1('ritesh'));
console.log(newdetail1('Ritesh','22','85'));
console.log(newdetail2('pce','iiot','nagpur'))
console.log('another section using a *');
console.log(xyz.detail1('rupesh',18,118));
console.log(xyz.detail2('nit',9,19));
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