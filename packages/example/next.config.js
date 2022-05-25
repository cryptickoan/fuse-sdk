module.exports = {
  webpack: (config, options) => {
    // Transpile files matching `rari-components`, even though it is in
    // `node_modules` (Next excludes `node_modules` by default).
    config.module.rules.push({
      test: /\.tsx?/,
      include: [/node_modules\/rari-components/],
      use: "next-swc-loader",
    });

    return config;
  },
};