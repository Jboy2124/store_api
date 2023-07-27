//libraries
const express = require("express");
const router = express.Router();

//middlewares

//controllers
const { initial } = require("../controllers/handlers/initial");

module.exports = router.get("/initial/loading", initial);
