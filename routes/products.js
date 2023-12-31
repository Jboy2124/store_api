//libraries
const express = require("express");
const router = express.Router();

//middlewares
const { auth, productToken } = require("../controllers/middlewares/jwt");
const { image } = require("../controllers/middlewares/multer");

//controllers
const {
  post,
  postList,
  get,
  getImage,
  getTotal,
  getFeatProd,
  getProductById,
} = require("../controllers/handlers/products");

module.exports = router
  //endpoints
  .post("/product/new", image(), post)
  .post("/product/list/includes", auth, postList)
  .get("/product/image/:id", getImage)
  .get("/products/feature/:id", getFeatProd)
  .get("/product/prodId=:id", getProductById)
  .get("/products/total", getTotal)
  .get("/products", get);
