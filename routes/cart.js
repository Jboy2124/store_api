const express = require("express");
const router = express.Router();

//controllers
const { post } = require("../controllers/handlers/cart");

module.exports = router
  //endpoints
  .post("/product/cart/", post);
