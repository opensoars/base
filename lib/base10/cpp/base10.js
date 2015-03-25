var exports;

try{
  exports = require('bindings')('base10');
}
catch(e){
  /* istanbul ignore next */
  exports = undefined;
}


console.log(exports[2](15));


module.exports = exports;