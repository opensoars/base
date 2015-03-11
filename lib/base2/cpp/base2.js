try{
  module.exports = require('bindings')('base2');
}
catch(e){
  console.log('[base] Could not load base2 c++ implementation');
}