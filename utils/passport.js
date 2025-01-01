import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import GoogleUser from '../models/googleAuthModel.js'

export const configurePassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await GoogleUser.findOne({ googleId: profile.id });
console.log('LOGGED USER:',user)
          if (!user) {
            user = new GoogleUser({
              googleId: profile.id,
              email: profile.emails[0].value,
              name: profile.user.name,
              profilePhoto: profile.photos[0]?.value || null,
            });
            await user.save();
          }

          return done(null, user);
        } catch (err) {
          return done(err, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
