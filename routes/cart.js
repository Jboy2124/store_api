const express = require("express");
const router = express.Router();

//controllers
const { post, patch } = require("../controllers/handlers/cart");

module.exports = router
  //endpoints
  .post("/product/cart/", post)
  .patch("/product/cart/update", patch);
