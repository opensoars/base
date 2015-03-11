var fs = require('fs');

var exec = require('child_process').exec;



function Err(msg, err){
  var err_str = 'build error\n'
    + (msg ? msg + '\n' : '')
    + (err ? err.message + '\n' : '');

  throw new Error(err_str);
}


function build(dir){

  var commands = ''
    + 'cd ' + dir
    //+ ' && node-gyp configure'
    //+ ' && node-gyp rebuild'
    + ' && npm install';
  
  exec(commands, function (err, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if(err){
      console.log('exec error: ' + err);
    }
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