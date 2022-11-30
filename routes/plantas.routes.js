const express = require('express')
const { getAllPlants, createPlantas } = require('../controllers/plantas.models')
const plantasRouter = express.Router()

plantasRouter.get('/', getAllPlants)
plantasRouter.get('/:id')
plantasRouter.post('/', createPlantas)
plantasRouter.patch('/:id')
plantasRouter.delete('/:id')

module.exports = {plantasRouter}