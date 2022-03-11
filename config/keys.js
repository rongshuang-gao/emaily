if (process.env.NODE_ENV === "production") {
  // prod key
  module.exports = require("./prod");
} else {
  // dev key
  module.exports = require("./dev");
}
