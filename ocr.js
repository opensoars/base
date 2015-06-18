var fs = require('fs');

function deleteFolderRecursive(path) {
  if(fs.existsSync(path)){
    fs.readdirSync(path).forEach(function(file,index){
      var curPath = path + "/" + file;
      if(fs.lstatSync(curPath).isDirectory())
        deleteFolderRecursive(curPath);
      else
        fs.unlinkSync(curPath);
    });
    fs.rmdirSync(path);
  }
};


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

getCppDirs(function (err, cpp_dirs){

  cpp_dirs.forEach(function (cpp_dir){
    deleteFolderRecursive(cpp_dir + '/node_modules');
    deleteFolderRecursive(cpp_dir + '/build');
  });

});