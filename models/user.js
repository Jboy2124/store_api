const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  auth: async (payload) => {
    const { email } = payload;
    try {
      const result = await prisma.user.findMany({
        where: {
          username: email,
        },
      });

      return result;
    } catch (error) {
      return { err: error.message };
    }
  },
};
