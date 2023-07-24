//libraries
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  list: async (page) => {
    //skip === offset
    //take === limit
    try {
      const result = await prisma.products.findMany({
        where: {
          status: "Active",
        },
        skip: (page - 1) * 8,
        take: 8,
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

  count: async () => {
    try {
      const total = await prisma.products.count({
        where: {
          status: "Active",
        },
      });

      return total;
    } catch (error) {
      return { error: error.message };
    }
  },

  store: async (payload, img) => {
    const { sku, brand, model, desc, color, rom, ram, qty, price } = payload;
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
              availQty: qty,
              amount: price,
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
