import express from "express";
import passport from "passport";

const router = express.Router();

//Google authentication route
router.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );
  
  
  // Google callback route
  router.get(
      "/auth/google/callback",
      passport.authenticate("google", { failureRedirect: "/register" }),
      (req, res) => {
        res.redirect(`${process.env.CLIENT_URL}/`);
      }
    );

    // Logout route
router.get("/logout", (req, res) => {
    req.logout((err) => {
      if (err) return res.send(err);
      res.redirect(`${process.env.CLIENT_URL}/`);
    });
  });
  
export default router;