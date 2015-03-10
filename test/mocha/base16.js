var assert = require('assert');

var base = require('./../../index.js'),
    base16 = base[16];


describe('base16', function (){

  describe('2', function (){
    it('returns {string}11111111 when arg1={string}ff', function (){
      assert.equal(base16[2]('ff'), '11111111');
    });
    it('returns {string}1010101110101 when arg1={string}1575', function (){
      assert.equal(base16[2]('1575'), '1010101110101');
    });
  });

  describe('base10', function (){
    it('returns {int}65281 when arg1={string}ff01', function (){
      assert.equal(base16[10]('ff01'), 65281);
    });
    it('returns {int}174 when arg1={string}ae', function (){
      assert.equal(base16[10]('ae'), 174);
    });
    it('returns {int}255 when arg1={string}ff', function (){
      assert.equal(base16[10]('ff'), 255);
    });
    it('returns {int}16777215 when arg1={string}ffffff', function (){
      assert.equal(base16[10]('ffffff'), 16777215);
    })
  });

});
