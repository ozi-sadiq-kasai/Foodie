import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import { configurePassport } from './utils/passport.js';
import passportRoutes from './routes/passportRoute.js';
import localAuthRoutes from './routes/localAuthRoute.js';
import favouriteMeals from './routes/mealsRoute.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

//Middleware
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 1 day
      httpOnly: true,
    }, 
  })
);
// Enable CORS for requests from frontend
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Initialize Passport
configurePassport();
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(passportRoutes);
app.use(localAuthRoutes);
app.use(favouriteMeals);

// Connect to MongoDB and StartServer
const connectServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error.message);
  }
  // Start server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

connectServer();