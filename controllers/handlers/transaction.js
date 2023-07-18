//libraries
const Joi = require("joi");

//controllers
const Transactions = require("../../models/transaction");

module.exports = {
  post: async (req, res) => {
    try {
      const schema = Joi.object({
        userId: Joi.number().positive().required(),
        obj: Joi.array().items({
          prodId: Joi.string().required(),
          qty: Joi.number().positive().required(),
          price: Joi.number().positive().precision(2).required(),
        }),
      });

      const data = await schema.validateAsync(req.body);
      const response = await Transactions.store(data);

      res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },
};
