//libraries
const Joi = require("joi");
const sharp = require("sharp");

//models
const Product = require("../../models/products");

module.exports = {
  get: async (req, res) => {
    try {
      const response = await Product.list();
      res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },

  postImage: async (req, res) => {
    try {
      await sharp(req.file.buffer)
        .resize({ height: 330, width: 250 })
        .png()
        .toFile(`./assets/products/${req.file.originalname}`);

      res.status(200).json({ message: "Successful" });
    } catch (error) {
      res.json(error.message);
    }
  },

  post: async (req, res) => {
    try {
      const schema = Joi.object({
        sku: Joi.string().max(10).required(),
        brand: Joi.string().max(15).required(),
        model: Joi.string().max(20).allow("").optional(),
        desc: Joi.string().max(20).allow("").optional(),
        color: Joi.string().max(15).allow("").optional(),
        rom: Joi.string().max(10).allow("").optional(),
        ram: Joi.string().max(10).allow("").optional(),
        // qty: Joi.number().positive().allow("").optional(),
        // price: Joi.number().positive().allow("").optional(),
      });

      const data = await schema.validateAsync(req.body);
      const response = await Product.store(data);

      if (!response.error) res.json({ id: response.prodId });
      else res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },
};
