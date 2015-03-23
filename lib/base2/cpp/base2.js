var exports;

try{
  exports = require('bindings')('base2');
}
catch(e){
  /* istanbul ignore next */
  exports = undefined;
}

/**
 * ! Leggo !
 */
var result = exports.b10('1111');
console.log('result:', result);

module.exports = exports;