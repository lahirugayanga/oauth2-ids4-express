const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportSetup = require("./config/passport");
var cookieSession = require("cookie-session");
require("dotenv").config();
require("https").globalAgent.options.rejectUnauthorized = false;

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setting up cookie session
app.use(
  cookieSession({
    keys: ["test"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

//Initializing passport
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/api", require("./auth"));

//Enable cors
app.use(cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
