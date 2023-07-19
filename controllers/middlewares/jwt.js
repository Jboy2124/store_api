const jwt = require("jsonwebtoken");

module.exports = {
  auth: (req, res, next) => {
    try {
      const authHeader = req.headers["authorization" || "Authorization"];

      if (!authHeader) return res.status(401).json("Unauthorized Request!");

      const token = authHeader.split(" ")[1];

      jwt.verify(token, process.env.JWT_ACCESS_TOKEN_KEY, (error, decoded) => {
        if (error)
          return res.status(403).json("Invalid Token, Forbidden Access!");

        next();
      });
    } catch (error) {
      return error.message;
    }
  },
};
