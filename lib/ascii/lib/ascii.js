var MAPS = require('./../../maps'),
    MAP64 = MAPS.arrs[64],
    MAPASCII = MAPS.arrs['ascii'];


var EMPTY_BYTE = '00000000',
    PAD_CHAR = '=';


/**
 * @param c {string}
 * @return  {int}     C its ascii value
 */
function getCharVal(c){
  return MAPASCII.indexOf(c) + 32;
}

/**
 * Gets base2 representation of the given int in byte format.
 * Prefixes with bytes of value 0.
 *
 * @param b10 {int}
 * @return {string}  Base2 byte
 */
function b10ToByte(b10){
  var b2 = '',
      pref_len;

  while(b10 != 0){
    b2 = (b10 % 2) + b2;
    b10 = Math.floor(b10 / 2);
  }

  pref_len = (4 - b2.length%4);

  for(var i=0; i<pref_len; i+=1)
    b2 = '0' + b2;

  return b2;
}

/**
 * Converts a base2 string to base10 int which will be used
 * to select a character from the base64 map.
 *
 * @param base2 {string}  
 * @return      {string}  Base64 character
 */
function get64Char(b2){
  var b10 = 0,
      rev_b2_arr = b2.toString().split('').reverse();

  for(var i=0; i<rev_b2_arr.length; i+=1)
    b10 += rev_b2_arr[i] * Math.pow(2, i);
  
  return MAP64[b10];
}


module.exports = {

  to: {

    '64': function (ascii){
      var b64 = '',
          bit_pattern = '',
          pad_count = 3-ascii.length%3 == 3 ? 0 : 3-ascii.length%3;

      // Create bit_pattern
      for(var c_i=0; c_i<ascii.length; c_i+=1)
        bit_pattern += b10ToByte(getCharVal(ascii[c_i]));
      
      // Add empty bytes to bit_pattern when 
      for(var p_i=0; p_i<pad_count; p_i+=1)
        bit_pattern += EMPTY_BYTE;
      
      // Create b64 string from bit_pattern, padding bytes
      // will be set to base64 'A' instead of '='
      for(var b_i=0; b_i<bit_pattern.length; b_i+=6)
        b64 += get64Char(bit_pattern.substr(b_i, 6));

      // Replace 'A' padding chars with '='
      b64 = b64.slice(0, b64.length-pad_count);
      for(var t_i=0; t_i<pad_count; t_i+=1)
        b64 += PAD_CHAR;
      
      return b64;
    }
  }


};
