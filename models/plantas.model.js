const { db, DataTypes } = require('../utils/database')

const plantas = db.define('plantas',{
    id: {
       primaryKey: true,
       type: DataTypes.INTEGER,
       autoIncrement: true,
       allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cultivo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    siembra: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    exigencia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

module.exports = {plantas}