import mongoose from 'mongoose';
const { Schema } = mongoose;

const localAuthSchema = new Schema(
    {
      name: String,
      email: { type: String, unique: true, required: true },
      password: { type: String, required: true },
    },
    { timestamps: true }
  );
  
export default mongoose.model('LocalAuth', localAuthSchema);
