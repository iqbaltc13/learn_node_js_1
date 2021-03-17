const path = require('path');
// Import express
const express = require('express');
// Import cors
const cors = require("cors");
// Import connection
const db = require("./config/database.js");
// Import router
const Router = require("./routes/routes.js");
require('dotenv').config();
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');




// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());

app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set folder public as static folder for static file
app.use('/assets',express.static(__dirname + '/public'));

// Testing database connection 
try {
    db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// use router
app.use(Router);

// listen on port
app.listen(8000, () => console.log('Server running at http://localhost:8000'));