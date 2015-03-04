var MAPS = require('./../../maps'),
    MAP16 = MAPS.arrs[16];


module.exports = {

  to: {
    
    '2': function (){
      // Scope `to`
      return function (b16){
        var b2 = '',
            b10 = this[10](b16),
            rev_b16_arr = b16.toLowerCase().split('').reverse();

        while(b10 != 0){
          b2 = (b10 % 2) + b2;
          b10 = Math.floor(b10 / 2);
        }

        return b2;
      };
    }(),
    
    '10': function (b16){
      var b10 = 0,
          rev_b16_arr = b16.toLowerCase().split('').reverse();

      for(var i=0; i<rev_b16_arr.length; i+=1)
        b10 += MAP16.indexOf(rev_b16_arr[i]) * Math.pow(16, i);
      
      return b10;
    }
  }
  
};
