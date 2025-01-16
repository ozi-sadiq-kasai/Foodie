import mongoose from 'mongoose'

const mealSchema = new mongoose.Schema({
    idMeal: String,
    header: String,
    // image: String,
    // youtube: String,
})

const Meal = mongoose.model('Meal',mealSchema)

export default Meal