//libraries
const Joi = require("joi");

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
