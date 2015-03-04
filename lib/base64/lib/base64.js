var MAPS = require('./../../maps'),
    MAP64 = MAPS.arrs[64],
    MAPASCII = MAPS.arrs['ascii'];


var EMPTY_BYTE = '00000000',
    PAD_CHAR = '=';


/**
 * Returns the 6 bit representation of the ascii character value
 *
 * @param b10 {int}  Ascii character value
 * @return {string}
 */
function b10To6Bit(b10){
  var bits = '',
      pref_count;

  while(b10 != 0){
    bits = (b10 % 2) + bits;
    b10 = Math.floor(b10 / 2);
  }

  pref_count = ( (6-bits.length%6) == 6 ? 0 : (6-bits.length%6));

  for(var i=0; i<pref_count; i+=1)
    bits = '0' + bits;

  return bits;
}

/**
 * @param byte {string}
 * @return b10 {int}
 */
function byteToB10(byte){
  var b10 = 0,
      rev_byte_arr = byte.toString().split('').reverse();

  for(var i=0; i<rev_byte_arr.length; i+=1)
    b10 += rev_byte_arr[i] * Math.pow(2, i);
  
  return b10;
}



module.exports = {
  
  to: {

    'ascii': function (b64){
      var ascii = '',
          bit_pattern = '',
          empty_bit = '0',
          pad_len = (b64.match(/=/g) || []).length,
          remainder;

      // Remove padding characters
      b64 = b64.replace(/=/g, '');

      // Create bit_pattern from base64
      for(var b64_i=0; b64_i<b64.length; b64_i+=1)
        bit_pattern += b10To6Bit(MAP64.indexOf(b64[b64_i]));
      
      // Append empty bytes so we get byte blocks in the bit_pattern
      remainder = (8-bit_pattern.length%8) == 8 ? 0 : (8-bit_pattern.length%8);
      for(var p_i=0; p_i<remainder; p_i+=1)
        bit_pattern += empty_bit;
      
      // Remove empty bytes
      // p_l_i = pad_length_iterator
      for(var p_l_i=0; p_l_i<pad_len; p_l_i+=1)
        bit_pattern = bit_pattern.replace(/00000000$/, '');

      // Create ascii string
      for(var b_i=0; b_i<bit_pattern.length; b_i+=8)
        ascii += MAPASCII[byteToB10(bit_pattern.substr(b_i, 8)) - 32];

      return ascii;
    }

  }

};
