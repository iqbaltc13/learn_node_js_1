
const Sequelize = require("sequelize");


require('dotenv').config();



// create connection
const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

// export connection

module.exports = db;