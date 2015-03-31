var fs = require('fs');

var exec = require('child_process').exec;


function Err(msg, err){
  var err_str = 'build error\n'
    + (msg ? msg + '\n' : '')
    + (err ? err.message + '\n' : '');

  throw new Error(err_str);
}

/**
 * Lets do this synchronous
 */

function getCppDirs(cb){

  var lib_dir = __dirname + '/lib';
  fs.readdir(lib_dir, function (err, libs){
    if(err) return cb('Could not read ' + lib_dir, err);
        var cpp_dirs = [];

    var lib_count = libs.length,
        lib_i = 0;

    libs.forEach(function (dir){
      var module_dir = lib_dir + '/' + dir

      fs.readdir(module_dir, function (err, dirs){
        lib_i++;

        if(err) return cb('Could not read ', err);

        dirs.forEach(function (dir, i){
          if(dir == 'cpp')
            cpp_dirs.push(module_dir + '/' + dir);
        });

        if(lib_i == lib_count)
          cb(null, cpp_dirs);
      });
    });
  });

}

getCppDirs(function (err, dirs){
  if(err) return Err(err);

  (function build(i){
    if(i == dirs.length) return;

    var commands = 'cd ' + dirs[i] + ' && npm install';

    console.log(commands);

    exec(commands, function (err, stdout, stderr){
      if(err)
        console.log('--- exec error ' + i + ' ---\n'
          + err + '--- end exec error ---');

      console.log('--- stdout ' + i + ' ---\n'
        + stdout + '--- end stdout ' + i + ' ---');
      console.log('--- stderr ' + i + ' ---\n'
        + stderr + '--- end stderr ' + i + ' ---');

      build(i+=1);
    });

  }(0));

});


/*
function build(dir){

  var commands = 'cd ' + dir + ' && npm install nan && npm install bindings'
      + ' && node-gyp configure && node-gyp build';
  
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
*/