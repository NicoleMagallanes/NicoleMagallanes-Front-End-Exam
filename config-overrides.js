const path = require("path");

module.exports = function override(config) {
  // Ensure resolve.fallback exists
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: false,
  };

  return config;
};
