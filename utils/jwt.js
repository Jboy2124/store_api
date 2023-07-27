const jwt = require("jsonwebtoken");

module.exports = {
  sign: (payload) => {
    try {
      const token = jwt.sign(
        { data: payload },
        process.env.JWT_ACCESS_TOKEN_KEY,
        {
          algorithm: "HS384",
          expiresIn: "15m",
        }
      );
      return token;
    } catch (error) {
      return error.message;
    }
  },

  productSign: (payload) => {
    try {
      const token = jwt.sign(
        {
          data: payload,
        },
        process.env.PRODUCT_ACCESS_TOKEN_KEY,
        {
          algorithm: "HS384",
          expiresIn: "15m",
        }
      );
      return token;
    } catch (error) {
      return error.message;
    }
  },
};
