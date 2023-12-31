//libraries
const express = require("express");
const router = express.Router();

//middlewares
const { limiter } = require("../controllers/middlewares/rate-limit");
const { auth } = require("../controllers/middlewares/jwt");
//controllers
const { post, patch } = require("../controllers/handlers/profile");

module.exports = router
  //endpoints
  .post("/profile/new", limiter, post)
  .patch("/profile/update=:id", auth, patch);
