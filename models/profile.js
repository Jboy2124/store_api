//libraries
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//utils
const { signin } = require("../utils/bcrypt");

module.exports = {
  store: async (payload) => {
    const {
      fname,
      lname,
      gender,
      address,
      email,
      contactNo,
      username,
      password,
    } = payload;
    try {
      const result = await prisma.profile.create({
        data: {
          fname: fname,
          lname: lname,
          gender: gender,
          address: address,
          email: email,
          contactNo: contactNo,
          user: {
            create: {
              username: username,
              password: await signin(password),
            },
          },
        },
      });

      return result;
    } catch (error) {
      return { error: error.message };
    }
  },

  update: async (id, payload) => {
    const { fname, lname, gender, address, email, contactNo } = payload;
    try {
      const result = await prisma.profile.update({
        where: {
          profileId: id,
        },
        data: {
          fname: fname,
          lname: lname,
          gender: gender,
          address: address,
          email: email,
          contactNo: contactNo,
        },
      });

      return result;
    } catch (error) {
      return { err: error.message };
    }
  },
};
