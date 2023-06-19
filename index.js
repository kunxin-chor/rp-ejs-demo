const express = require('express');
const ejs = require('ejs');
const dotenv = require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));


// any routes
app.get('/', function(req,res){
    res.render('home')
})

app.get('/services', function(req,res){
    res.send("services")
})

app.listen(3000, function(){
    console.log("Server has started");
})

