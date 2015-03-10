var b2 = require('bindings')('base2');


module.exports = b2;



var str_inp = '10111101',
    arr_inp = new Uint8Array( str_inp.split('') );

console.log('(JS) b2.b10(arr_inp):', b2.b10(str_inp));

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


//console.log('b2.b16(str_inp):', b2.b16(str_inp));
