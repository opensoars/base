var args = process.argv,
    from = args[2],
    to   = args[3],
    inp  = args[4];


function Err(msg){
  throw new Error(msg);
}

function log(msg){
  console.log('[base]', msg)
}

if(!from) Err('Base CLI requires a base to convert from as argument 1');
if(!to) Err('Base CLI requires a base to convert to as argument 2');
if(!inp) Err('Base CLI requires data to convert as argument 3');

log('Converting from ' + from + ' to ' + to + '.');

var base = require('./index.js'),
    api = base.api;


try{
  var result = api(from, to, inp);
  log('Conversion successful');
  log('- - Conversion result - -');
  console.log(result);
  log('- - End of conversion result - -');
}
catch(e){
  log('Conversion failed, error below');
  log(e);
}
