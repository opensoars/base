var exports = {};


var bases = {
  '2': require('./lib/base2'),
  '10': require('./lib/base10'),
  '16': require('./lib/base16'),
  '64': require('./lib/base64'),
  'ascii': require('./lib/ascii')
};


function Err(msg){
  throw new Error(msg);
}

function api(from, to, data){
  if(!from) return Err('expected a base as arg1');
  if(!to)   return Err('expected a base as arg2');
  if(!data) return Err('expected data as arg3');

  if(!bases[from])
    return Err('`' + from + '` is not a defined base');

  if(!bases[from][to])
    return Err('Cannot convert `' + from + '` to `' + to + '`'
      + ', ' + '`' + to + '` is not defined');

  return bases[from][to](data);
};


for(var base in bases)
  exports[base] = bases[base];

exports.api = api;

module.exports = exports;


console.log(base[2]);



/*

Dev notes, also some benchmark stuff which will be used in some tests later on


base[2][10]();


var result1 = api(64, 'ascii', api('ascii', 64, 'pleasure.'));
var result2 = api(64, 'ascii', api('ascii', 64, 'leasure.'));
var result3 = api(64, 'ascii', api('ascii', 64, 'easure.'));
var result4 = api(64, 'ascii', api('ascii', 64, 'Man.. Does this work? Well, it seems so!'));

console.log('result1:', result1);
console.log('leasure.:', result2);
console.log('result3:', result3);
console.log('result4:', result4);



var result1 = api('ascii', 64, 'pleasure.');
var result2 = api('ascii', 64, 'leasure.');
var result3 = api('ascii', 64, 'easure.');

console.log('result1:', result1);
console.log('result2:', result2);
console.log('result3:', result3);


console.time('inline');
for(var i=0, str=''; i<1000000; i+=1)
  str += '0';
console.timeEnd('inline');



console.time('early assign');
var z = '0';
for(var i=0, str=''; i<1000000; i+=1)
  str += z;
console.timeEnd('early assign');


function randomB2(c){
  var b2_arr = [];

  for(var i=0; i < c; i+=1)
    b2_arr.push( Math.random() > 0.5 ? '1' : '0' );

  return new Uint8Array(b2_arr);
}


function randomB10(c){
  var b10 = '';

  for(var i=0; i<c; i+=1)
    b10 += Math.floor(Math.random() * 10);

  return b10;
}


var mb = 0.5;

console.time('randomB2(' + mb + ' * 1024 * 1024)');
var random_b2 = randomB2(mb * 1024 * 1024);
console.timeEnd('randomB2(' + mb + ' * 1024 * 1024)');


//random_b2 = randomB2(8);
//console.log(random_b2);
console.time('10->16');
var result = api(2, 16, random_b2);
console.timeEnd('10->16');

//console.log('result', result);


console.log('random_b2.length', random_b2.length);
console.log('result.length:', result.length);

//var random_b2_str = '';
//for(var i=0; i<random_b2.length; i+=1)
//  random_b2_str += random_b2[i];

var split = result.split(''),
    formatted_str = '';

for(var i=0; i<split.length; i+=1){
  split[i] = split[i].toLowerCase();
}

for(var i=0; i<split.length; i+=4){
  if(i % 32 == 0 && i != 0) formatted_str += '\n';
  else if(i % 32 != 0) formatted_str += ' ';

  formatted_str += split[i] + split[i+1] + split[i+2] + split[i+3];
}

console.log(formatted_str);

var fs = require('fs');
//fs.writeFile('./input.txt', random_b2_str, function (err){});
fs.writeFile('./output.txt', result, function (err){});
fs.writeFile('./formatted.txt', formatted_str, function (err){});
*/

/*


0001 0110 1101
   1  42  8401
   1   6  13
   1   6  D
16c

console.log('result', api(10, 16, 90345));

400
400 / 16 = 25.0
.0 * 16 = 0             0
25 / 16 = 1.5625 (>1)
.5625 * 16 = 9          9
1 / 16 = 0.0625 (<1)    1

401
401 / 16 = 25.0625
.0625 * 16 = 1          1
25 / 16 = 1.5625 (>1)
.5625 * 16 = 9          9
1 / 16 = 0.0625 (<1)    1


925
925 / 16 = 57.8125
.8125 * 16 = 13         D
57 / 16 = 3.5625 (>1)
.5625 * 16 = 9          9
3 / 16 = 0.1875 (<1)    3

5133
5133 / 16 = 320.8125
.8125 * 16 = 13         D
320 / 16 = 20 (>1)
0 * 16 = 0              0
20 / 16 = 1.25 (>1)
0.25 * 16 = 4           4
1 / 16 = 0.0625 (<1)    1


90345
90345 / 16 = 5646.5625
0.5625 * 16 = 9          9
5646 / 16 = 352.875 (>1)
0.875 * 16 = 14          E
352 / 16 = 22 (>1)
0 * 16 = 0               0
22 / 16 = 1.375 (>1)
0.375 * 16 = 6           6
1 / 16 = 0.0625 (<1)     1

console.log('result:', api(2, 16, '1CDB'));


var base16_arr = 'FF EF 11 FE AD ED F'.split(' '),
    base10 = '';


base16_arr.forEach(function (base16){
  base10 += bases[16].to[10](base16) + ' ';
});

base10 = base10.substr(0, base10.length-1);


console.log(base10);

*/