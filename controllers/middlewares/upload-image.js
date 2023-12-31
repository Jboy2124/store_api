const multer = require("multer");

module.exports = {
  upload: () => {
    const mult = multer({
      limits: {
        fileSize: 5000000, //5mb
      },
      fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
          cb(new Error("Invalid image file"));
        }
        cb(undefined, true);
      },
    }).single("prodImage");

    return mult;
  },
};
