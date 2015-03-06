console.log('\n- math.js -\n');


var js = {
  pow: function (n, p){
    var r = n,
        p = p - 1,
        i;

    if(arguments.length < 2)
      throw new Error('Wrong number of arguments');

    for(i=0; i < p; i++)
      r*=n;
    
    return r;
  }
};


var test = require('./../../node_modules/bindings')('math');


test.cout();

console.log(test.getString());


console.log(test.add(5, 4));

var bench_pow = 250000000;

console.time('c++');
console.log(test.pow(0.9999999999, bench_pow));
console.timeEnd('c++');

console.time('js');
console.log(js.pow(0.9999999999, bench_pow));
console.timeEnd('js');

console.log('\n- math.js -');