var assert = require('assert');

var base = require('./../../index.js'),
    base64 = base[64];


describe('base64', function (){

  describe('to', function (){

    describe('ascii', function (){
      it('returns {string}pleasure. when arg1={string}cGxlYXN1cmUu', function (){
        assert.equal(base64.to['ascii']('cGxlYXN1cmUu'), 'pleasure.');
      });
      it('returns {string}leasure. when arg1={string}bGVhc3VyZS4=', function (){
        assert.equal(base64.to['ascii']('bGVhc3VyZS4='), 'leasure.');
      });
      it('returns {string}easure. when arg1={string}ZWFzdXJlLg==', function (){
        assert.equal(base64.to['ascii']('ZWFzdXJlLg=='), 'easure.');
      });
    });

  });

});