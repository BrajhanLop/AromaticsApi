const { plantas } = require('.././models/plantas.model')

const getAllPlants = async(req, res) => {

    const getPlants =   await plantas.findAll()
    res.status(200).json({
        status: 'success',
        data: {
            getPlants 
        }
    })
}

const createPlantas = async (req, res) => {

const { nombre, descripcion1, descripcion2, cultivo, siembra, apto, exigencia, status} = req.body;

const nuevaPlanta = await plantas.create({nombre, descripcion1, descripcion2, cultivo, siembra,apto, exigencia,status  })

res.status(201).json({
    nuevaPlanta 
})
}

module.exports = {getAllPlants, createPlantas}