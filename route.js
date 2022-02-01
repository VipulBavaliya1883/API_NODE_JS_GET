var express = require('express')
var router = express.Router()
var movies = require('.models/movies')

router.get("/movies", async(req,res)=>{
    const imovie = await movies.find()
    res.send(imovie)
    console.log(imovie)
});