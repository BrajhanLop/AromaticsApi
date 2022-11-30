
// 01. importar express
const express = require('express')
const { db } =  require('./utils/database')
const { plantasRouter } = require('./routes/plantas.routes')

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

app.listen(5000, ()=>{
    console.log('bienvenido a mi servidor');
})