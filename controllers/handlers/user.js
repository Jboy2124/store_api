//libraries
const Joi = require("joi");

//controllers
const User = require("../../models/user");

module.exports = {
  login: async (req, res) => {
    try {
      const schema = Joi.object({
        username: Joi.string().alphanum().min(4).max(20).required(),
        password: Joi.string().alphanum().min(6).max(20).required(),
      });

      const data = await schema.validateAsync(req.body);
      const response = await User.auth(data);

      res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },
};
