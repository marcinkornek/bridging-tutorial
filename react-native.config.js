const path = require('path');

module.exports = {
  dependencies: {
    'app-info-package': {
      // <--------- Add entry for "app-info-package"
      root: path.resolve(__dirname, './app-info-package'),
    },
    'conic-gradient-package': {
      // <--------- Add entry for "conic-gradient-package"
      root: path.resolve(__dirname, './conic-gradient-package'),
    },
  },
};
