const multer = require("multer");
const path = "./assets/products";

module.exports = {
  image: () => {
    const fileStorage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, path);
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
      },
    });

    const upload = multer({
      storage: fileStorage,
      limits: {
        fieldSize: 3000000, //3mbps
      },
      fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|webp)$/)) {
          return cb(new Error("Image not valid"));
        }
        cb(undefined, true);
      },
    });
    return upload;
  },
};
