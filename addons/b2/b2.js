var b2 = require('./../../node_modules/bindings')('b2');

var str_inp = '111111111111111111111111',
    arr_inp = new Uint8Array( str_inp.split('') );

/*
var conversions = 100000;

var i;

console.time('str');
for(i=0; i<conversions; i+=1)
  b2.b10(str_inp)
console.timeEnd('str');


console.time('arr');
for(i=0; i<conversions; i+=1)
  b2.b10(arr_inp)
console.timeEnd('arr');
*/

