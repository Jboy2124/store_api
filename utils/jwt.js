const jwt = require("jsonwebtoken");

module.exports = {
  sign: (payload) => {
    try {
      const token = jwt.sign(
        { data: payload },
        process.env.JWT_ACCESS_TOKEN_KEY,
        {
          algorithm: "HS384",
          expiresIn: "5m",
        }
      );
      return token;
    } catch (error) {
      return error.message;
    }
  },
};
