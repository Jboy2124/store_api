const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  store: async (payload) => {
    const { userId, modeOfPayment, obj } = payload;
    try {
      const result = await prisma.transactions.create({
        data: {
          userId: userId,
          mode: modeOfPayment,
          details: {
            create: obj,
          },
        },
      });

      return result;
    } catch (error) {
      return { err: error.message };
    }
  },
};
