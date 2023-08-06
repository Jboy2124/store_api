//libraries
const Joi = require("joi");

//models
const { store, remove } = require("../../models/cart");

module.exports = {
  post: async (req, res) => {
    try {
      const schema = Joi.object({
        userId: Joi.number().positive().required(),
        prodId: Joi.string().required(),
        currentCount: Joi.number().positive().required(),
        operation: Joi.string().required(),
      });

      const data = await schema.validateAsync(req.body);
      const response = await store(data);
      res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },

  del: async (req, res) => {
    try {
      const schema = Joi.object({
        userId: Joi.number().positive().required(),
        prodId: Joi.string().required(),
      });
      const data = await schema.validateAsync(req.body);
      const response = await remove(data);
      res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },
};
