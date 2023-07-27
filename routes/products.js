//libraries
const express = require("express");
const router = express.Router();

//middlewares
const { auth } = require("../controllers/middlewares/jwt");
const { image } = require("../controllers/middlewares/multer");

//controllers
const {
  post,
  get,
  getImage,
  getTotal,
  getFeatProd,
  getProductById,
} = require("../controllers/handlers/products");

module.exports = router
  //endpoints
  .post("/product/new", image(), post)
  .get("/product/image/:id", getImage)
  .get("/products/feature/:id", getFeatProd)
  .get("/product/prodId=:id", getProductById)
  .get("/products/total", getTotal)
  .get("/products", get);
