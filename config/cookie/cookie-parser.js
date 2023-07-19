const cookieSettings = {
  secure: false, //change to tron on production
  httpOnly: true,
  sameSite: "strict",
  maxAge: "15 * 60 * 60 * 1000",
};

module.exports = cookieSettings;
