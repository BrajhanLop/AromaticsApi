const { Sequelize, DataTypes  } = require('sequelize')
// const dotenv = require('dotenv');

// dotenv.config({ path: './config.env' });
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USERNAME = process.env.DB_USERNAME || 'postgres';
const DB_PASSWORD = process.env.DB_PASSWORD || 'lopezs123';
const DB_PORT = process.env.DB_PORT || 5432;
const DB = process.env.DB || 'Aromaticas';


const db = new Sequelize({
    dialect: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB,
    logging: false
})

module.exports = {db, DataTypes}

