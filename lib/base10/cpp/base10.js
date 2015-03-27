var exports;

try{
  exports = require('bindings')('base10');
}
catch(e){
  /* istanbul ignore next */
  exports = undefined;
}

module.exports = exports;