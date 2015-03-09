var b2 = require('./../../node_modules/bindings')('b2');

var test_inp = '0011';

var str_result = b2.b10(test_inp);
console.log('str_result:', str_result);


var Uint8_result = b2.b10( new Uint8Array(test_inp.split('')) );
console.log('Uint8_result', Uint8_result);