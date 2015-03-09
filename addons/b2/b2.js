var b2 = require('./../../node_modules/bindings')('b2');


var str_result = b2.b10("0011");
console.log('str_result:', str_result);


var Uint8_result = b2.b10(
  new Uint8Array( '0011'.split('') )
);
console.log('Uint8_result', Uint8_result);