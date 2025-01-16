import Meal from '../models/mealsModel.js'

const favouriteMeals = async(req,res) =>{
    try {
        const meal = new Meal(req.body)
        await meal.save()
res.status(201).json({message:'Meal saved successfully', meal })
    } catch (error) {
        res.status(500).json({ error: error.message })  
    }
}

export default favouriteMeals