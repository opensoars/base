var fs = require('fs');


function Err(){
  throw new Error
}

fs.readdir('./lib/dir', function (err, dir){
  if(err) return Err('');
})