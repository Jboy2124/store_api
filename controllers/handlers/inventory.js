//libraries
const Joi = require("joi");

//controllers
const Inventory = require("../../models/inventory");

module.exports = {
  patch: async (req, res) => {
    try {
      const { id } = req.params;

      const schema = Joi.object({
        qty: Joi.number().positive().allow(0).optional(),
        price: Joi.number().precision(2).allow(0.0).optional(),
      });

      const data = await schema.validateAsync(req.body);
      const response = await Inventory.update(id, data);

      res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },
};
