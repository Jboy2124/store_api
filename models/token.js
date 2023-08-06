const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  store: async ({ userId, token }) => {
    try {
      const result = await prisma.token.create({
        data: {
          userId: userId,
          refreshToken: token,
        },
      });
      return result;
    } catch (error) {
      return { err: error.message };
    }
  },

  refreshToken: async (userId) => {
    try {
      let token;
      const result = await prisma.token.findMany({
        where: {
          userId: userId,
        },
      });

      if (result) {
        token = await prisma.token.findUnique({
          where: {
            tokenId: result[0].tokenId,
          },
          select: {
            refreshToken: true,
          },
        });
      }

      return token;
    } catch (error) {
      return { err: error.message };
    }
  },

  remove: async () => {
    try {
      await prisma.token.deleteMany({});
      return { message: "token deleted" };
    } catch (error) {
      return { err: error.message };
    }
  },
};
