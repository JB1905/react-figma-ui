module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-knobs'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
