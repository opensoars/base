

module.exports = require('./lib/base2.js');

var cpp_dir = __dirname + '/'

module.exports.cpp = require('./../../node_modules/bindings')('./cpp/b2');