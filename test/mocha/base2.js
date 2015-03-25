var assert = require('assert');

var base = require('./../../index.js');

describe('base2', function (){

  describe('js', function (){
    var base2 = base[2].js;

    describe('base10', function (){
      it('returns {int}15 when arg1={int}1111', function (){
        assert.equal(base2[10](1111), 15);
      });
      it('returns {int}255 when arg1={string}11111111', function (){
        assert.equal(base2[10](11111111), 255);
      });
      it('returns {int}90 when arg1={string}01011010', function (){
        assert.equal(base2[10]('01011010'), 90)
      });
      it('takes a number or a string', function (){
        assert.equal(base2[10](1111), 15);
        assert.equal(base2[10]('1111'), 15);
      });
    });

    describe('base16', function (){
      it('returns {string}ff when arg1={string}11111111', function (){
        assert.equal(base2[16]('11111111'), 'ff');
      });
      it('returns {string}1cdb when arg1={string}1110011011011', function (){
        assert.equal(base2[16]('1110011011011'), '1cdb');
      });
      it('returns {string}ff when arg1={int}11111111', function (){
        assert.equal(base2[16](11111111), 'ff');
      });
      it('returns {string}1cdb when arg1={int}1110011011011', function (){
        assert.equal(base2[16](1110011011011), '1cdb');
      });
      it('returns {string}3ad9 when arg1={Uint8Array}11101011011001', function (){
        assert.equal(base2[16](new Uint8Array('11101011011001'.split(''))), '3ad9');
      });
      it('returns {string}a when arg1={Uint8Array}1010', function (){
        assert.equal(base2[16](new Uint8Array('1010'.split(''))), 'a');
      });
      it("throws 'expected data of type string|number|Uint8Array' when data is of wrong type", function (){
        try{ base2[16]({ wrong: 'type' }); }
        catch(e){ assert.equal(e.message, 'expected data of type string|number|Uint8Array'); }
      });
    });
  });

  describe('cpp', function (){
    if(base[2].cpp){
      var base2 = base[2].cpp;

      describe('base10', function (){
        it('returns {int}15 when arg1={int}1111', function (){
          assert.equal(base2[10](1111), 15);
        });
        it('returns {int}255 when arg1={string}11111111', function (){
          assert.equal(base2[10](11111111), 255);
        });
        it('returns {int}90 when arg1={string}01011010', function (){
          assert.equal(base2[10]('01011010'), 90)
        });
        it('takes a number or a string', function (){
          assert.equal(base2[10](1111), 15);
          assert.equal(base2[10]('1111'), 15);
        });
      });

      describe('base16', function (){
        it('returns {string}ff when arg1={string}11111111', function (){
          assert.equal(base2[16]('11111111'), 'ff');
        });
        it('returns {string}1cdb when arg1={string}1110011011011', function (){
          assert.equal(base2[16]('1110011011011'), '1cdb');
        });
        it('returns {string}ff when arg1={int}11111111', function (){
          assert.equal(base2[16](11111111), 'ff');
        });
        it('returns {string}1cdb when arg1={int}1110011011011', function (){
          assert.equal(base2[16](1110011011011), '1cdb');
        });
        it('returns {string}3ad9 when arg1={Uint8Array}11101011011001', function (){
          assert.equal(base2[16](new Uint8Array('11101011011001'.split(''))), '3ad9');
        });
        it('returns {string}a when arg1={Uint8Array}1010', function (){
          assert.equal(base2[16](new Uint8Array('1010'.split(''))), 'a');
        });
        it("throws 'expected data of type string|number|Uint8Array' when data is of wrong type", function (){
          try{ base2[16]({ wrong: 'type' }); }
          catch(e){ assert.equal(e.message, 'expected data of type string|number|Uint8Array'); }
        });
      });


    }
  });
});