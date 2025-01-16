import express from 'express'
import favouriteMeals from '../controllers/mealsController.js'

const router = express.Router()

router.post('/api/meals',favouriteMeals)

export default router