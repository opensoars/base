var MAPS = require('./../../maps'),
    MAP16 = MAPS.arrs[16];


function appendBuffer(buf1, buf2){
  var new_buf = new Uint8Array(buf1.byteLength + buf2.byteLength);
  new_buf.set(new Uint8Array(buf1), 0);
  new_buf.set(new Uint8Array(buf2), buf1.byteLength);
  return new_buf;
};


function Err(msg){
  throw new Error(msg);
}

module.exports = {

  to: {
    '10': function (b2){
      var b10 = 0,
          rev_b2_arr = b2.toString().split('').reverse();

      for(var i=0; i<rev_b2_arr.length; i+=1)
        b10 += rev_b2_arr[i] * Math.pow(2, i);
      
      return b10;
    },

    '16': function (b2){
      var b16 = '',
          b2_pref = [],
          bit_str = '',
          to_b10 = this[10];

      if(b2.BYTES_PER_ELEMENT){
        if(b2.length%4 != 0){
          for(var i=0; i<4 - b2.length%4; i+=1)
            b2_pref.push(0);

          b2 = appendBuffer(new Uint8Array(b2_pref), b2);
        }

        for(var i=b2.length-1; i>0; i-=4){
          bit_str = '';
          for(var b_i=0; b_i<4; b_i+=1)
            bit_str = b2[i-b_i] + bit_str;
          
          b16 = MAP16[to_b10(bit_str)] + b16;
        }
      }
      else if(typeof b2 == 'string' || typeof b2 == 'number'){
        b2 = b2.toString();
        for(var i=0; i<b2.length%4; i+=1)
          b2 = '0' + b2;

        for(var i=0; i<b2.length; i+=4)
          b16 += MAP16[to_b10(b2.substr(i, 4))];
      }
      else
        return Err('expected data of type string|number|Uint8Array');
        

      return b16;
    }

/*
    '64': function (b2){
      // Leggo
    }
*/
  }



};