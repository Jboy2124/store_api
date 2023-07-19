//libraries
const Joi = require("joi");

//controllers
const User = require("../../models/user");
const { cookieSettings } = require("../../config/cookie/cookie-parser");

module.exports = {
  login: async (req, res) => {
    try {
      const schema = Joi.object({
        username: Joi.string().alphanum().min(4).max(20).required(),
        password: Joi.string().alphanum().min(6).max(20).required(),
      });

      const data = await schema.validateAsync(req.body);
      const response = await User.auth(data);

      if (!response.message) {
        req.session.response;
        req.session.authorized = true;

        res.cookie("_access-token", response.token, cookieSettings);

        res.json({
          id: response.userId,
          user: response.user,
          email: response.email,
        });
      } else res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },

  logout: (req, res) => {
    try {
      req.session.destroy();
    } catch (error) {
      res.json(error.message);
    }
  },
};
