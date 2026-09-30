'use strict';

if ("development" === 'production') {
  module.exports = require('./cjs/react-reconciler-reflection.production.min.js');
} else {
  module.exports = require('./cjs/react-reconciler-reflection.development.js');
}
