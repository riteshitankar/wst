import express from  'express'
import dotenv from 'dotenv';
import router from './routers/router.js'


dotenv.config({path:"./config.env"})
let port = process.env.PORT || 9898;
// when you don't want to store your port number  publically


let app = express();



console.log('heading 1')
console.log('heading 2')
console.log('heading 3')
console.log('heading 4')
console.log('heading 5')



/*
app.get("/",(request, response) => {
    response.send('Welcome to my node server.');
})
app.listen(port, () => {
    console.log('server is running on the port number', port);
})
*/




app.use(router)
app.listen(port, () => {
    console.log('server is running acually on the port number', port);
})
// we are requesting a data from the  router to show on the node and browser

