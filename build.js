var fs = require('fs');

var exec = require('child_process').exec;


function Err(msg, err){
  var err_str = 'build error\n'
    + (msg ? msg + '\n' : '')
    + (err ? err.message + '\n' : '');

  throw new Error(err_str);
}


function build(dir){

  var commands = 'cd ' + dir + ' && npm install && node-gyp configure && node-gyp build';
  
  console.log(commands);

  exec(commands, function (err, stdout, stderr) {
    if(err)
      console.log('--- exec error ---\n' + err + '--- end exec error ---');

    console.log('--- stdout ---\n' + stdout + '--- end stdout ---');
    console.log('--- stderr ---\n' + stderr + '--- end stderr ---');
  });
}

var lib_dir = __dirname + '/lib';
fs.readdir(lib_dir, function (err, dirs){
  if(err) return Err('Could not read ' + lib_dir, err);

  dirs.forEach(function (dir){
    var module_dir = lib_dir + '/' + dir

    fs.readdir(module_dir, function (err, dirs){
      if(err) return Err('Could not read ', err);

      dirs.forEach(function (dir){
        if(dir == 'cpp')
          build(module_dir + '/' + dir);
      });
    });
  });
});