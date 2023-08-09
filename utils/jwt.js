const jwt = require("jsonwebtoken");

module.exports = {
  sign: (payload) => {
    try {
      const token = jwt.sign(
        { data: payload },
        process.env.JWT_ACCESS_TOKEN_KEY,
        {
          algorithm: "HS384",
          expiresIn: "1d",
        }
      );
      return token;
    } catch (error) {
      return error.message;
    }
  },

  createRefreshToken: (payload) => {
    try {
      const token = jwt.sign(
        {
          data: payload,
        },
        process.env.JWT_REFRESH_TOKEN_KEY,
        {
          algorithm: "HS384",
          expiresIn: "10m",
        }
      );
      return token;
    } catch (error) {
      return error.message;
    }
  },
};
