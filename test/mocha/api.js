var assert = require('assert');

var base = require('./../../index.js'),
    base_api = base.api;


describe('api', function (){
  it("returns {int}15 if arg1={int}2, arg2={int}10, arg3={int}1111", function (){
    assert.equal(base_api(2, 10, 1111), 15);
  });
  it("returns {int}255 if arg1={int}2, arg2={int}10, arg3={int}11111111", function (){
    assert.equal(base_api(2, 10, 11111111), 255);
  });

  it("throws 'expected a base as arg1' if arg1=undefined", function (){
    try{ base_api(); }
    catch(e){ assert.equal(assert.equal(e.message, "expected a base as arg1")); }
  });
  it("throws 'expected a base as arg2' if arg2=undefined", function (){
    try{ base_api(2); }
    catch(e){ assert.equal(assert.equal(e.message, "expected a base as arg2")); }
  });
  it("throws 'expected data as arg3' if arg3=undefined", function (){
    try{ base_api(2, 10); }
    catch(e){ assert.equal(assert.equal(e.message, "expected data as arg3")); }
  });
  it("throws '`333` is not a defined base' if arg1 is not a defined base", function (){
    try{ base_api(333, 2, 1111); }
    catch(e){ assert.equal(e.message, '`333` is not a defined base'); }
  });
  it("throws '`333` is not a defined base in `2`' if arg2 is not a defined base in base arg1", function (){
    try{ base_api(2, 333, 1111) }
    catch(e){ assert.equal(e.message, '`333` is not a defined base in `2`'); }
  });
});