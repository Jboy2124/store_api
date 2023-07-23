const whitelist = ["http://localhost:8001", "http://localhost:8002"];

const corsOptions = {
  origin: (origin, cb) => {
    if (whitelist.indexOf(origin) !== -1) {
      cb(null, true);
    } else {
      cb("Bad Request. Blocked by CORS.");
    }
  },
  credentials: true,
  optionSuccessStatus: 200,
};

module.exports = corsOptions;
