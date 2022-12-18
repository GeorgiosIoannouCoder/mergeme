const baseUrl =
  process.env.NODE_ENV !== "PRODUCTION"
    ? "http://localhost:3000"
    : "https://mergeme.herokuapp.com";

module.exports = baseUrl;
