//libraries
const { PrismaClient } = require("@prisma/client");
const Joi = require("joi");
const { verify } = require("../../utils/bcrypt");
const { sign } = require("../../utils/jwt");
const prisma = new PrismaClient();

//controllers
const User = require("../../models/user");
const { cookieSettings } = require("../../config/cookie/cookie-parser");

module.exports = {
  login: async (req, res) => {
    try {
      const schema = Joi.object({
        email: Joi.string().email({ tlds: true }).required(),
        password: Joi.string().alphanum().min(6).max(20).required(),
      });

      const data = await schema.validateAsync(req.body);
      const response = await User.auth(data);

      if (!response.err) {
        if (response.length > 0) {
          const isMatch = await verify(data.password, response[0]?.password);

          if (isMatch) {
            res.cookie(
              "_access-token",
              await sign({ profile: response[0]?.profileId }),
              cookieSettings
            );

            const result = await prisma.profile.findUnique({
              where: {
                profileId: response[0]?.profileId,
              },
            });

            res.json({
              id: result.profileId,
              user: result.fname,
              email: result.email,
            });
          } else {
            res.json({ message: "Invalid password!" });
          }
        } else {
          res.json({ message: "Invalid username!" });
        }
      } else {
        res.json(response.err);
      }
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
