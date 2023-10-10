const { resolve } = require("path");

const withLinaria = require("next-with-linaria");
const withNextIntl = require("next-intl/plugin")();
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find(
      // @ts-ignore
      (rule) => rule.test && rule.test.test && rule.test.test(".svg"),
    );
    fileLoaderRule.exclude = [/\@tabler\/icons\//, /-sprite\.svg$/];
    config.module.rules.push({
      // @ts-ignore
      test: function (path) {
        return (
          path.indexOf("@tabler/icons") !== -1 ||
          path.indexOf("-sprite.svg") !== -1
        );
      },
      use: ["svg-sprite-loader", "svgo-loader"],
      include: [
        resolve("node_modules/@tabler/icons"),
        resolve("src"),
        resolve("public"),
      ],
    });

    return config;
  },
};

module.exports = withNextIntl(withLinaria(withBundleAnalyzer(nextConfig)));
