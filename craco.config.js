const webpack = require("webpack");
const path = require("path");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          crypto: require.resolve("crypto-browserify"),
        },
      },
    },
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^crypto$/,
        contextRegExp: /bcryptjs/,
      }),
    ],
  },
};
