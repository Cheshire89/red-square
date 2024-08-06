const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@uiStore": path.resolve(__dirname, "src/ui/store"),
    },
  },
};
