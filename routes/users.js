const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

// Good validation documentation available at https://express-validator.github.io/docs/
const { sanitizeBody } = require("express-validator");

//New User
router.post(
  "/signin",
  sanitizeBody("*")
    .trim()
    .escape(),
  function(req, res, next) {
    var name = req.body.name;
    var user = req.body.user;
    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.password2;
    console.log(name);
    res.redirect("/");
  }
);

module.exports = router;
