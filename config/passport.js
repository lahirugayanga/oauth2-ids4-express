const passport = require("passport");
var PasswordGrantStrategy = require("passport-oauth2-password-grant");
require("dotenv").config();

//Authentication endpoints taken from .env file
const SERVER_TOKEN_URL = process.env.SERVER_TOKEN_URL;
const SERVER_CLIENT_ID = process.env.SERVER_CLIENT_ID;
const SERVER_CLIENT_SECRET = process.env.SERVER_CLIENT_SECRET;

passport.serializeUser(function (authModel, done) {
  done(null, authModel);
});

passport.deserializeUser(function (authModel, done) {
  done(null, authModel);
});

//Passport strategy
passport.use(
  new PasswordGrantStrategy(
    {
      tokenURL: SERVER_TOKEN_URL,
      clientID: SERVER_CLIENT_ID,
      clientSecret: SERVER_CLIENT_SECRET,
    },
    function (accessToken, refreshToken, profile, done) {
      const authModel = {
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
      done(null, authModel);
    }
  )
);
