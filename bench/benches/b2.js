module.exports = function (base){
  var base2 = base[2];


  var byte_255_str = 11111111;

  var code = "\n"
    + "for(var i = 0; i < 500000; i++)\n"
    + "  base2.js[10](byte_255_str);"
    ;

  console.log(code);

  var start = new Date().getTime();
  for(var i = 0; i < 500000; i++)
    base2.js[10](byte_255_str);
  console.log('\ntakes', new Date().getTime() - start + 'ms\n');


  var code = "\n"
    + "for(var i = 0; i < 500000; i++)\n"
    + "  base2.cpp[10](byte_255_str);"
    ;

  console.log(code);

  var start = new Date().getTime();
  for(var i = 0; i < 500000; i++)
    base2.cpp[10](byte_255_str);
  console.log('\ntakes', new Date().getTime() - start + 'ms\n');

}


/**

loop 50000
  base2.base10('11111111')

js: 0ms
cpp: 0ms

*/