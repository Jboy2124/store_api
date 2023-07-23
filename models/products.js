//libraries
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  list: async () => {
    try {
      const result = await prisma.products.findMany({
        where: {
          status: "Active",
        },
        include: {
          inventory: {
            select: {
              amount: true,
              availQty: true,
            },
          },
        },
      });
      return result;
    } catch (error) {
      return { error: error.message };
    }
  },

  store: async (payload, img) => {
    const {
      sku,
      brand,
      model,
      desc,
      color,
      rom,
      ram,
      // qty,
      // price,
    } = payload;
    try {
      const result = await prisma.products.create({
        data: {
          sku: sku,
          brand: brand,
          model: model,
          desc: desc,
          color: color,
          rom: rom,
          ram: ram,
          image: img,
          inventory: {
            create: {
              availQty: 0,
              amount: 0.0,
            },
          },
        },
      });
      return result;
    } catch (error) {
      return { error: error.message };
    }
  },
};
