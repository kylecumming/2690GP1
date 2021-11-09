var express = require('express');
var app = express();
const port = 3001;

//Havent got acutal database credentials from group
const Pool = require('pg').Pool
const pool = new Pool({
    user: '',
    host: 'localhost',
    database: 'api',
    password: '',
    port: 3001,
})

const getData = (request, response) => {
    pool.query('SELECT * FROM table', (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}