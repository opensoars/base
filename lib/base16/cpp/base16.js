var exports;

try{
  exports = require('bindings')('base16');
}
catch(e){
  /* istanbul ignore next */
  exports = undefined;
}

module.exports = exports;