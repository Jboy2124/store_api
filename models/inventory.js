//libraries
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  update: async (id, payload) => {
    const { qty, price } = payload;

    try {
      const result = await prisma.inventory.update({
        where: {
          invId: parseInt(id),
        },
        data: {
          availQty: qty,
          amount: price,
        },
      });

      return result;
    } catch (error) {
      return { err: error.message };
    }
  },
};
