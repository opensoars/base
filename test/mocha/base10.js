var assert = require('assert');

var base = require('./../../index.js');


describe('base10', function (){

  describe('js', function (){
    var base10 = base[10].js;

    describe('base2', function (){
      it('returns {string}1111 when arg1={int}15', function (){
        assert.equal(base10[2](15), '1111');
      });
      it('returns {string}1111 when arg1={string}15', function (){
        assert.equal(base10[2]('15'), '1111');
      });
      it('returns {string}1111110100010 when arg1={int}15', function (){
        assert.equal(base10[2](8098), '1111110100010');
      });
      it('returns {string}1111110100010 when arg1={string}8098', function (){
        assert.equal(base10[2]('8098'), '1111110100010');
      });
    });
    
    describe('base16', function (){
      it('returns {string}500f86 when arg1={int}5246854', function (){
        assert.equal(base10[16](5246854), '500f86');
      });
      it('returns {string}500f86 when arg1={string}5246854', function (){
        assert.equal(base10[16]('5246854'), '500f86');
      });
      it('returns {string}499602d2 when arg1={int}1234567890', function (){
        assert.equal(base10[16](1234567890), '499602d2');
      });
      it('returns {string}499602d2 when arg1={string}1234567890', function (){
        assert.equal(base10[16]('1234567890'), '499602d2');
      });
    });
  });

  describe('cpp', function (){
    if(base[10].cpp){
      var base10 = base[10].cpp;

      describe('base2', function (){
        it('returns {string}1111 when arg1={int}15', function (){
          assert.equal(base10[2](15), '1111');
        });
        it('returns {string}1111 when arg1={string}15', function (){
          assert.equal(base10[2]('15'), '1111');
        });
        it('returns {string}1111110100010 when arg1={int}15', function (){
          assert.equal(base10[2](8098), '1111110100010');
        });
        it('returns {string}1111110100010 when arg1={string}8098', function (){
          assert.equal(base10[2]('8098'), '1111110100010');
        });
      });
      
      describe('base16', function (){
        it('returns {string}500f86 when arg1={int}5246854', function (){
          assert.equal(base10[16](5246854), '500f86');
        });
        it('returns {string}500f86 when arg1={string}5246854', function (){
          assert.equal(base10[16]('5246854'), '500f86');
        });
        it('returns {string}1e240 when arg1={int}123456', function (){
          assert.equal(base10[16](123456), '1e240');
        });
        it('returns {string}1e240 when arg1={string}123456', function (){
          assert.equal(base10[16]('123456'), '1e240');
        });
      });
    }
    else
      it('sets cpp implementation to undefined when C++ isnt compiled', function (){
        assert.equal(base[10].cpp, undefined);
      });
    
  });

});
