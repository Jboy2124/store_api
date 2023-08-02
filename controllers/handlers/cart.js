//libraries
const Joi = require("joi");

//models
const { store, updateStatus } = require("../../models/cart");

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

  patch: async (req, res) => {
    try {
      const { userId, prodId } = req.query;
      const response = await updateStatus({ userId, prodId });
      res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },
};
