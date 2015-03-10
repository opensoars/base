

module.exports = require('./lib/base2.js');

var cpp_dir = '../lib/base2/cpp/b2';

module.exports.cpp = require('./../../node_modules/bindings')(cpp_dir);