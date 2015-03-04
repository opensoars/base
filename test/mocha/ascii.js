var assert = require('assert');

var base = require('./../../index.js'),
    ascii = base['ascii'];


describe('ascii', function (){

  describe('to', function (){

    describe('base64', function (){
      it('returns {string}cGxlYXN1cmUu when arg1={string}pleasure.', function (){
        assert.equal(ascii.to[64]('pleasure.'), 'cGxlYXN1cmUu');
      });
      it('returns {string}bGVhc3VyZS4= when arg1={string}leasure.', function (){
        assert.equal(ascii.to[64]('leasure.'), 'bGVhc3VyZS4=');
      });
      it('returns {string}ZWFzdXJlLg== when arg1={string}easure.', function (){
        assert.equal(ascii.to[64]('easure.'), 'ZWFzdXJlLg==');
      });
    });

  });

});
