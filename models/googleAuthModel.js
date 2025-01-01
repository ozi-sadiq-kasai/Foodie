import mongoose from 'mongoose'

const googleAuthSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
      },
      name: {
        type: String,
        required: true,
      },
      profilePhoto: {
        type: String,
      },
    });
    
    const GoogleUser = mongoose.model("GoogleUser", googleAuthSchema);
    
    export default GoogleUser;