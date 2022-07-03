const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/data", (req, res) => {
  //You can access the authModel from "req.user" in concurrent requests
  res.json(req.user);
});

//Password grant authentication fucntion middleware
function authenticate() {
  return function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    passport.authenticate("password-grant", {
      username: username,
      password: password,
    })(req, res, next);
  };
}

//Passport authenticaton
router.post("/oauth2", authenticate(), (req, res) => {
  res.send(req.user);
});

module.exports = router;
