const { productSign } = require("../../utils/jwt");

module.exports = {
  initial: async (req, res) => {
    try {
      const DATA = "My_Initial_Data";
      res.cookie("productToken", await productSign({ data: DATA }), {
        secure: true,
        httpOnly: true,
        sameSite: "strict",
        maxAge: 15 * 60 * 60 * 1000,
      });
      res.json({ message: "Initial Load Success" });
    } catch (error) {
      res.json(error.message);
    }
  },

  publicToken: (req, res) => {
    try {
      res.json({ message: "Public Access Granted" });
    } catch (error) {
      res.json(error.message);
    }
  },
};
