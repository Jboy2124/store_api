//libraries
const express = require("express");
const router = express.Router();

//middlewares
const { auth } = require("../controllers/middlewares/jwt");

//controllers
const { post } = require("../controllers/handlers/products");

module.exports = router
  //endpoints
  .post("/product/new", auth, post);
