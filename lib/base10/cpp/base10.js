var exports;

try{
  exports = require('bindings')('base10');
}
catch(e){
  /* istanbul ignore next */
  exports = undefined;
}


var result = exports[16](255);
console.log('result:', result);


module.exports = exports;