//libraries
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  store: async (payload) => {
    const { sku, brand, model, desc, color, rom, ram } = payload;
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
