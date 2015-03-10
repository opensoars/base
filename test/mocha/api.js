var assert = require('assert');

var base = require('./../../index.js'),
    api = base.api;



describe('api', function (){

  describe('js', function (){
    it("returns {int}15 if arg1={int}2, arg2={int}10, arg3={int}1111", function (){
      assert.equal(api(2, 10, 1111, 'js'), 15);
    });
    it("returns {int}255 if arg1={int}2, arg2={int}10, arg3={int}11111111", function (){
      assert.equal(api(2, 10, 11111111, 'js'), 255);
    });
    it("returns {int}15 if arg1={int}2, arg2={int}10, arg3={string}1111", function (){
      assert.equal(api(2, 10, '1111', 'js'), 15);
    });
    it("returns {int}255 if arg1={int}2, arg2={int}10, arg3={string}11111111", function (){
      assert.equal(api(2, 10, '11111111', 'js'), 255);
    });
  });

  describe('cpp', function (){
    it("returns {int}15 if arg1={int}2, arg2={int}10, arg3={int}1111", function (){
      assert.equal(api(2, 10, 1111, 'cpp'), 15);
    });
    it("returns {int}255 if arg1={int}2, arg2={int}10, arg3={int}11111111", function (){
      assert.equal(api(2, 10, 11111111, 'cpp'), 255);
    });
    it("returns {int}15 if arg1={int}2, arg2={int}10, arg3={string}1111", function (){
      assert.equal(api(2, 10, '1111', 'cpp'), 15);
    });
    it("returns {int}255 if arg1={int}2, arg2={int}10, arg3={string}11111111", function (){
      assert.equal(api(2, 10, '11111111', 'cpp'), 255);
    });
  });

  it("throws 'expected a base as arg1' if arg1=undefined", function (){
    try{ api(); }
    catch(e){ assert.equal(e.message, "expected a base as arg1"); }
  });
  it("throws 'expected a base as arg2' if arg2=undefined", function (){
    try{ api(2); }
    catch(e){ assert.equal(e.message, "expected a base as arg2"); }
  });
  it("throws 'expected data as arg3' if arg3=undefined", function (){
    try{ api(2, 10); }
    catch(e){ assert.equal(e.message, "expected data as arg3"); }
  });
  it("throws '`333` is not a defined base' if arg1 is not a defined base", function (){
    try{ api(333, 2, 1111); }
    catch(e){ assert.equal(e.message, '`333` is not a defined base'); }
  });
  it("throws 'Cannot convert `2` to `333`, `333` is not defined' if arg2 is not a defined in base arg1", function (){
    try{ api(2, 333, 1111) }
    catch(e){ assert.equal(e.message, 'Cannot convert `2` to `333`, `333` is not defined'); }
  });
  it("throws 'Implementation `test` is not defined' if arg4 is an unknow implementation", function (){
    try{ api(2, 333, 1111, 'test') }
    catch(e){ assert.equal(e.message, 'Implementation `test` is not defined'); }
  });

});
