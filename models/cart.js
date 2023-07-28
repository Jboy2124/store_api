const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  store: async (payload) => {
    const { userId, prodId, currentCount, operation } = payload;
    let func;

    if (operation === "increment") {
      func = { increment: currentCount };
    } else {
      func = { decrement: currentCount };
    }

    try {
      const result = await prisma.cart.upsert({
        where: {
          prodId_userId: {
            prodId: prodId,
            userId: userId,
          },
        },
        update: {
          count: func,
        },
        create: {
          userId: userId,
          prodId: prodId,
          count: currentCount,
        },
      });
      return result;
    } catch (error) {
      return { err: error.message };
    }
  },
};
