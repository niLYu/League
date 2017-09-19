'use strict';

const env = process.env;

module.exports = {
  get isProduction() {
    return env.NODE_ENV === 'production';
  },
};
