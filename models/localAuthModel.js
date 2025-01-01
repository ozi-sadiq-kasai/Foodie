import mongoose from 'mongoose'
const {Schema} = mongoose

const localAuthSchema = new Schema({
    name:String,
    email:String,
    password:String
})

export default mongoose.model('LocalAuth',localAuthSchema)