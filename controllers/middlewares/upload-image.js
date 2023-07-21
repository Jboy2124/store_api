const multer = require("multer");

module.exports = {
  upload: () => {
    const mult = multer({
      limits: {
        fileSize: 1000000, //1mbps
      },
      fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
          cb(new Error("Invalid image file"));
        }
        cb(undefined, true);
      },
    });
    return mult;
  },
};
