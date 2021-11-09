var express = require('express');
var mongoose = require('mongoose');
const Router = require('./routes');
var app = express();
app.use(express.json());
//have not got actual db info from group
const username = "";
const password = "";
const cluster = "";
const dbname = "";

mongoose.connect(
    'mongodb+srv://${username}:$password@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
)

const collection = await mongoCollection.find();
console.log("collection", collection);