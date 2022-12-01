
// 01. importar express
const express = require('express')
const { db } =  require('./utils/database')
const { plantasRouter } = require('./routes/plantas.routes')
// const dotenv = require('dotenv');

// dotenv.config({ path: './config.env' });
// 02. inicializar espress
const app = express();

app.use(express.json())

app.use('/api/v1/aromaticas',plantasRouter)

db.authenticate()
.then(()=> console.log('conexion exitosa'))
.catch(()=> console.log('error'))

db.sync()
.then(()=> console.log('sync correcta'))
.catch(()=> console.log('error'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log('bienvenido a mi servidor');
})