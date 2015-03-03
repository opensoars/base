var b16_str = '0123456789abcdef';

var ascii_str = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  + '[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

var b64_str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkl'
  + 'mnopqrstuvwxyz0123456789+/';


module.exports = {

  strs: {
    '16': b16_str,
    'ascii': ascii_str,
    '64': b64_str
  },

  arrs: {
    '16': b16_str.split(''),
    'ascii': ascii_str.split(''),
    '64': b64_str.split('')
  }

};