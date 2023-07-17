const bcrypt = require("bcrypt");

module.exports = {
  signin: async (password) => {
    try {
      const salt = await bcrypt.genSalt(8);
      const hashed = await bcrypt.hash(password, salt);
      return hashed;
    } catch (error) {
      return error.message;
    }
  },

  verify: async (password, hashed) => {
    try {
      const isMatch = await bcrypt.compare(password, hashed);
      return isMatch;
    } catch (error) {
      return error.message;
    }
  },
};
