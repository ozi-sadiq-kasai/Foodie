import express from 'express';
import {register,login,logout} from '../controllers/localAuthController.js';

const router = express.Router();

router.post('/auth/register', register);

router.post('/auth/login', login);

router.get('/auth/logout', logout);  

export default router;