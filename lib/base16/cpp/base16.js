var exports;

try{
  exports = require('bindings')('base16');
}
catch(e){
  /* istanbul ignore next */
  exports = undefined;
}

console.log(exports[10]('ff'));

module.exports = exports;