const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { verify } = require("../utils/bcrypt");
const { sign } = require("../utils/jwt");

module.exports = {
  auth: async (payload) => {
    const { username, password } = payload;
    try {
      const result = await prisma.user.findMany({
        where: {
          username: username,
        },
      });

      if (result.length > 0) {
        const match = await verify(password, result[0]?.password);

        if (match) {
          const profile = await prisma.profile.findUnique({
            where: {
              profileId: result[0]?.profileId,
            },
          });

          return {
            userId: result[0]?.userId,
            user: profile.fname,
            email: profile.email,
            token: await sign({ profileId: result[0]?.profileId }),
          };
        } else return { message: "Invalid password" };
      } else {
        return { message: "Invalid username" };
      }
    } catch (error) {
      return { err: error.message };
    }
  },
};
