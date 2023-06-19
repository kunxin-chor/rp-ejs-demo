const express = require('express');
const ejs = require('ejs');
const dotenv = require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));


// any routes
app.get('/', function(req,res){
    res.render('home', {
       currentActive:'home'
    })
})

app.get('/services', function(req,res){
    res.render('services', {
        currentActive:'services'
    });
})

app.listen(3000, function(){
    console.log("Server has started");
})

