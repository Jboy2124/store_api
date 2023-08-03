const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  store: async (payload) => {
    const { userId, prodId, currentCount, operation } = payload;

    let func;
    let assignID = 0;

    if (operation === "increment") {
      func = { increment: currentCount };
    } else {
      func = { decrement: currentCount };
    }

    try {
      const filter = await prisma.cart.findMany({
        where: {
          prodId: prodId,
          userId: userId,
        },
      });

      if (filter.length === 0) {
        assignID = 0;
      } else {
        assignID = filter[0].cartId;
      }

      const result = await prisma.cart.upsert({
        where: {
          cartId: assignID,
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

  remove: async (payload) => {
    try {
      const id = await prisma.cart.findMany({
        where: {
          userId: payload.userId,
          prodId: payload.prodId,
        },
      });

      const result = await prisma.cart.delete({
        where: {
          cartId: id[0].cartId,
        },
      });

      return result;
    } catch (error) {
      return { error: error.message };
    }
  },
};
