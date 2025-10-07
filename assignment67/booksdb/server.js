import express from 'express';
import dotenv from  'dotenv'

import {router} from './routers/router.js'

dotenv.config({path: './config.env'})

let app = express()
let port = process.env.PORT
app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(express.static('public'))

app.get('/',(req,res) => {
    res.redirect('/api/details')
})
app.use('/api',router)

app.use((req,res) => {
    console.log('someone is trying to access a 404 route')
    res.status(404).json({
        message : 'content not found'
    })
})

app.listen(port, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
        return;
    }
    console.log('server is running on the port', port);
});