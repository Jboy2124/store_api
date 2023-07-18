//libraries
const express = require("express");
const router = express.Router();

//controllers
const { post } = require("../controllers/handlers/products");

module.exports = router
  //endpoints
  .post("/product/new", post);
