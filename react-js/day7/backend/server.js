import express from "express";
import cors from "cors"

let app = express() 
let port = 4001

app.use(express.json())

app.use(express.static('public'))
let corsOptions = {
    origin: "*",
    method: "*"
}
app.use(cors(corsOptions))

app.get("/test/hello",(req,res) => {
    res.status(200).json({
        message:'reached to the backend test route!', checkCode : true, 
        userData: {name: 'ritesh laxman itankar',
            phone:876796925551,
            city: 'Nagpur',
            state: 'Maharashtra'
        }})
})
app.listen(port,() => {
    console.log('server is running on port number' ,port)
})