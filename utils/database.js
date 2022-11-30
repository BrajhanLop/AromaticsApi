const { Sequelize, DataTypes  } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'lopezs123',
    database: 'Aromaticas'
})

module.exports = {db, DataTypes}

