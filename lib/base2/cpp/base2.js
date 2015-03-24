var exports;

try{
  exports = require('bindings')('base2');
}
catch(e){
  /* istanbul ignore next */
  exports = undefined;
}

module.exports = exports;