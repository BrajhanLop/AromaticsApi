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


const getPlantsByID = async(req, res) => {
 const { id } = req.params;

const plantsbyid = await plantas.findOne({ where: {id} })

if (!plantsbyid) {
    return res.status(404).json({
        status: 'error',
        message: 'plant not found'
    })
}

res.status(200).json({
    plantsbyid
})

}


const createPlantas = async (req, res) => {

const { nombre, descripcion1, descripcion2, cultivo, siembra, apto, exigencia, status} = req.body;

const nuevaPlanta = await plantas.create({nombre, descripcion1, descripcion2, cultivo, siembra,apto, exigencia,status  })

res.status(201).json({
    nuevaPlanta 
})
}

module.exports = {getAllPlants, createPlantas, getPlantsByID}