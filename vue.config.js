const path = require('path');

module.exports = {
  configureWebpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ['@components']: path.resolve(__dirname, 'components'),
    };
  },
};
