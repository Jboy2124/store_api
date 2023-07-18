//libraries
const express = require("express");
const router = express.Router();

//controllers
const { login } = require("../controllers/handlers/user");

module.exports = router
  //endpoints
  .post("/login", login);
