var fs = require('fs'),
    base = require('./../index.js');

var BENCH_DIR = __dirname + '/benches';

function Err(msg, err){
  throw new Error('bench error\n' + msg + (err ? '\n' + err.message : ''));
}

fs.readdir(BENCH_DIR, function (err, benches){
  if(err) return Err("Could not read '" + BENCH_DIR + "'", err);

  var bench_objects = {};

  benches.forEach(function (bench){
    require(BENCH_DIR + '/' + bench)(base);
  });
});