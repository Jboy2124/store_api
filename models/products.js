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
        skip: (page - 1) * 12,
        take: 12,
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

  listByProdId: async (payload) => {
    const { userId, prodId } = payload;
    try {
      const result = await prisma.products.findMany({
        where: {
          prodId: {
            in: prodId,
          },
        },
        include: {
          inventory: {
            select: {
              availQty: true,
              amount: true,
            },
          },
          cart: {
            where: {
              userId: Number(userId),
            },
            select: {
              count: true,
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
    const limit = 12;
    let total = 0;
    try {
      const result = await prisma.products.count({
        where: {
          status: "Active",
        },
      });

      total = Math.ceil(Number(result) / Number(limit));

      return total;
    } catch (error) {
      return { error: error.message };
    }
  },

  productById: async (id) => {
    try {
      const result = await prisma.products.findUnique({
        where: {
          prodId: id,
        },
        include: {
          inventory: {
            select: {
              amount: true,
            },
          },
        },
      });

      return result;
    } catch (error) {
      return { error: error.message };
    }
  },

  feature: async (id) => {
    try {
      const result = await prisma.products.findMany({
        where: {
          feature: 1,
        },
        take: 4,
      });

      return result;
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
