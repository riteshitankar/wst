import express from "express"

const app = express()

let port = 5001

app.listen(port,()=>{
    console.log(`server is running on port ${port}!`)
})