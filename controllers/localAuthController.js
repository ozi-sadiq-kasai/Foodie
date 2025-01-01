import LocalAuth from '../models/localAuthModel.js';
import { hashPassword, comparePassword } from '../utils/passwordHashing.js';

export const register = async (req, res) => {
  try {
    const hashedPassword = await hashPassword(req.body.password);
    const user = await LocalAuth.create({
      ...req.body,
      password: hashedPassword,
    });
    res.status(201).json({
      status: 'success',
      message: 'User successfully registered',
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: error.message,
      message: 'Could not register user',
    });
  }
};

export const login = async (req, res) => {
    try {
        const user = await LocalAuth.findOne({email: req.body.email})
        if(!user) {
          return res.status(401).json({
            error: 'User not found'
          })
        }
        //Compae the entered password with the stored hashed password
        const isMatch = await comparePassword(req.body.password, user.password)
        if(!isMatch) {
          return res.status(401).json({
            error: 'Invalid password'
          })
        }
     //Attach the user to the session
     req.session.user = {
        id: user._id,
        email: user.email,
        name: user.name
     }
     res.status(200).json({
       status: 'success',
       message: 'User logged in successfully',
       data: {
         user
       }
     })
}catch (error) {
    res.status(400).json({
      status: 'fail',
      error: error.message,
      message: 'Could not login user'
    });
  }
}

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({
        status: 'fail',
        message: 'Could not log out',
      });
    }
    res.clearCookie('connect.sid'); // Clear the session cookie
    res.status(200).json({
      status: 'success',
      message: 'Logged out successfully',
    });
  });
};