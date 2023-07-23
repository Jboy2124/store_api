const whitelist = ["http://localhost:8002", "http://localhost:8001"];

const corsOptions = {
  origin: (origin, cb) => {
    if (!origin || whitelist.includes(origin)) {
      cb(null, true);
    } else {
      cb("Bad Request. Blocked by CORS");
    }
  },
  credentials: true,
  optionSuccessStatus: 200,
};

module.exports = corsOptions;
