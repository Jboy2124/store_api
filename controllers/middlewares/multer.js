const multer = require("multer");
const destPath = "./assets";
const path = require("path");
// const sharp = require("sharp");

module.exports = {
  image: () => {
    const fileStorage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, destPath);
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
      },
    });

    const upload = multer({
      storage: fileStorage,
      limits: {
        fieldSize: 1000000, //1MB
      },
      fileFilter(req, file, cb) {
        const fileTypes = /jpeg|jpg|png/;
        const mimeType = fileTypes.test(file.mimetype);
        const extName = fileTypes.test(path.extname(file.originalname));

        if (mimeType && extName) {
          return cb(null, true);
        }
        cb("File not valid format. Select a valid file format");
      },
    }).single("prodImage");

    return upload;
  },
};
