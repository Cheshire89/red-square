const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@profileStore": path.resolve(__dirname, "src/store/profile"),
      "@socialStore": path.resolve(__dirname, "src/store/social"),
      "@menuStore": path.resolve(__dirname, "src/store/menu"),
      "@contentStore": path.resolve(__dirname, "src/store/content"),
    },
  },
};
