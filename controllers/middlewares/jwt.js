const jwt = require("jsonwebtoken");
const Token = require("../../models/token");

module.exports = {
  auth: async (req, res, next) => {
    const id = Token.refreshToken(1);
    try {
      // const authHeader = req.headers["authorization" || "Authorization"];
      const authHeader = req.headers.cookie;

      if (!authHeader) return res.status(401).json("Unauthorized Request!");

      const token = authHeader.split("=")[1];

      jwt.verify(token, process.env.JWT_ACCESS_TOKEN_KEY, (error, decoded) => {
        if (error) {
          console.log(id);

          return res
            .status(403)
            .json(`Forbidden Access: Error(${error.message})`);
        }

        next();
      });
    } catch (error) {
      return error.message;
    }
  },

  productToken: (req, res, next) => {
    try {
      const tokenHeader = req.headers.cookie;

      if (!tokenHeader) return res.status(401).json("Unauthorized");

      const token = tokenHeader.split("=")[1];

      jwt.verify(token, process.env.PRODUCT_ACCESS_TOKEN_KEY, (err, decode) => {
        if (err) return res.status(403).json("Forbidden");

        next();
      });
    } catch (error) {
      return error.message;
    }
  },
};
