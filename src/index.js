const express = require('express')
const mongoose = require('mongoose')
const app = express()
// const{loginFn,getStuData,postStuData,deleteStuData,updateStuData}=require('./controller')

app.use(express.json())

// mongoose.connect("")
// .then(()=>console.log("connected to MongoDB"))
// .catch((err) => console.log(err))

function loginFn(){
    console.log("api hit ...")
}

app.use('/login',loginFn)


app.listen(3001,()=> console.log("running on Port 3001"))