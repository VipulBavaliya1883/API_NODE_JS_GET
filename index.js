var express = require('express')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mbooks').then(()=>{
    console.log('DB Connected')
    
    var app = express()
    app.listen(3000,()=>{
        console.log("Server Started On 3000")
    })
}).catch((e)=>{
    console.log("DB Not Connected")
})