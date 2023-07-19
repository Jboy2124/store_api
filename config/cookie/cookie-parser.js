const cookieSettings = {
  secure: false, //change to tron on production
  httpOnly: true,
  sameSite: "strict",
  expires: "",
};

module.exports = cookieSettings;
