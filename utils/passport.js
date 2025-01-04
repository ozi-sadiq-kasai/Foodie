import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import GoogleUser from '../models/googleAuthModel.js';

export const configurePassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.SERVER_URL}/auth/google/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await GoogleUser.findOne({ googleId: profile.id });

          if (!user) {
            user = new GoogleUser({
              googleId: profile.id,
              email: profile.emails[0].value,
              name: profile.displayName, 
              profilePhoto: profile.photos[0]?.value || null,
            });
            await user.save();
          }

          return done(null, user);
        } catch (err) {
          console.error('Error in Passport GoogleStrategy:', err);
          return done(err, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id); // Only store the user's ID in the session
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await GoogleUser.findById(id); 
      done(null, user); 
    } catch (err) {
      done(err, null); 
    }
  });
};
