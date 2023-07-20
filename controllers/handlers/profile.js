//libraries
const Joi = require("joi");

//middlewares

//controllers
const Profile = require("../../models/profile");

module.exports = {
  post: async (req, res) => {
 
    try {
      const schema = Joi.object({
        fname: Joi.string().max(25).required(),
        lname: Joi.string().max(25).allow("").optional(),
        gender: Joi.string().max(6).optional(),
        address: Joi.string().max(50).allow("").optional(),
        email: Joi.string().email({ tlds: true }).allow("").optional(),
        contactNo: Joi.string().max(15).allow("").optional(),
        username: Joi.string().email({ tlds: true }).required(),
        password: Joi.string().alphanum().max(20).required(),
      });

      const data = await schema.validateAsync(req.body);
      const response = await Profile.store(data);

      if (!response.error) res.json({ id: response.profileId });
      else res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },

  patch: async (req, res) => {
    try {
      const { id } = req.params;

      const schema = Joi.object({
        fname: Joi.string().max(25).allow("").optional(),
        lname: Joi.string().max(25).allow("").optional(),
        gender: Joi.string().max(6).allow("").optional(),
        address: Joi.string().max(50).allow("").optional(),
        email: Joi.string().email({ tlds: true }).allow("").optional(),
        contactNo: Joi.string().max(15).allow("").optional(),
      });

      const data = await schema.validateAsync(req.body);
      const response = await Profile.update(id, data);

      if (!response.err) res.json(response);
      else res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  },
};
