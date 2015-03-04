var MAPS = require('./../../maps'),
    MAP16 = MAPS.arrs[16];

module.exports = {

  to: {
    
    '2': function (b10){
      var b2 = '';

      while(b10 != 0){
        b2 = (b10 % 2) + b2;
        b10 = Math.floor(b10 / 2);
      }

      return b2;
    },

    '16': function (b10){
      var b16 = '';
          
      var next_num;
      while(b10 > 0){
        next_num = b10 / 16; // block scope, plz
        b16 = MAP16[(next_num - Math.floor(next_num)) * 16] + b16;
        b10 = Math.floor(next_num);
      }

      return b16;
    }
  }

};
