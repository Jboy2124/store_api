//libraries
const Joi = require("joi");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const session = require("express-session");

//models
const Product = require("../../models/products");
const configSession = require("../../config/session/session-config");

module.exports = {
  get: async (req, res) => {
    const pageNo = req.query.page;

    // console.log(req.query.page); //to get the params/query page number
    try {
      const response = await Product.list(pageNo);
      res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },

  // getListById: async (req, res) => {
  //   try {
  //     const response = await Product.listByProdId(req.body);
  //     res.json(response);
  //   } catch (error) {
  //     res.json(error.message);
  //   }
  // },

  getProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await Product.productById(id);
      res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },

  getFeatProd: async (req, res) => {
    const feature = req.params.id;
    try {
      const response = await Product.feature(feature);
      res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },

  getTotal: async (req, res) => {
    try {
      const response = await Product.count();
      res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },

  getImage: (req, res) => {
    try {
      const imageName = req.params.id;
      if (imageName !== undefined) {
        const dir = "d:\\projects\\back\\store_api\\";

        const imagePath = path.join(dir, "/assets/products/", imageName);

        res.sendFile(imagePath);
      }
    } catch (error) {
      res.json(error.message);
    }
  },

  postList: async (req, res) => {
    try {
      const schema = Joi.object({
        userId: Joi.number().positive().required(),
        prodId: Joi.array().items(Joi.string().required()),
      });

      const data = await schema.validateAsync(req.body);
      const response = await Product.listByProdId(data);
      res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },

  post: async (req, res) => {
    const { filename: prodImage } = req.file;
    try {
      const schema = Joi.object({
        sku: Joi.string().max(10).required(),
        brand: Joi.string().max(15).required(),
        model: Joi.string().max(20).allow("").optional(),
        desc: Joi.string().max(20).allow("").optional(),
        color: Joi.string().max(15).allow("").optional(),
        rom: Joi.string().max(10).allow("").optional(),
        ram: Joi.string().max(10).allow("").optional(),
        qty: Joi.number().optional(),
        price: Joi.number().optional(),
      });

      await sharp(req.file.path)
        .resize({ height: 330, width: 270 })
        .png()
        .toFile(path.resolve(req.file.destination, "products", prodImage));
      fs.unlinkSync(req.file.path);

      const data = await schema.validateAsync(req.body);
      const response = await Product.store(
        data,
        // req.file.filename
        `assets/products/${req.file.filename}`
      );

      if (!response.error) res.json({ id: response.prodId });
      else res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },
};
