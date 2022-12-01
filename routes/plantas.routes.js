const express = require('express')
const { getAllPlants, createPlantas, getPlantsByID } = require('../controllers/plantas.models')
const plantasRouter = express.Router()

plantasRouter.get('/', getAllPlants)
plantasRouter.get('/:id', getPlantsByID)
plantasRouter.post('/', createPlantas)
plantasRouter.patch('/:id')
plantasRouter.delete('/:id')

module.exports = {plantasRouter}