const path = require("path");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const nextEnv = require("next-env");

require("dotenv").config(
  process.env.STAGE === "production"
    ? {
        path: path.resolve(process.cwd(), ".env.production"),
      }
    : {}
);

const nextConfig = {
  experimental: {
    webpack(config, { buildId, isServer, webpack }) {
      config.plugins.push(
        new webpack.DefinePlugin({
          "process.env.IS_PRODUCTION": JSON.stringify(
            process.env.NODE_ENV === "production"
          ),
        })
      );
    },
  },
};

module.exports = withPlugins(
  [
    [
      withImages,
      {
        inlineImageLimit: 0,
        // exclude: path.resolve(__dirname, "src/svgs"),
      },
    ],
    [nextEnv()],
  ],
  nextConfig
);
