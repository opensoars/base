# Base

[![Build Status](https://img.shields.io/travis/opensoars/base.svg?style=flat)](https://travis-ci.org/opensoars/base)
[![Coverage Status](https://img.shields.io/coveralls/opensoars/base.svg?style=flat)](https://coveralls.io/r/opensoars/base)
[![Dependency Status](https://david-dm.org/opensoars/base.svg?style=flat)](https://david-dm.org/opensoars/base)
[![Development Dependency Status](https://david-dm.org/opensoars/base/dev-status.svg?style=flat)](https://david-dm.org/opensoars/base#info=devDependencies&view=table)


Base coversions.

---


## Dependencies
None.

## Install
* Clone source
* `npm install`


## API
Using it in a node project is simple: `var base = require('base');`. You can acces every base its conversion methods manualy: `base[2].to[16]('10101101');` There is an API aswell which allows a cleaner syntax: `base.api(2, 16, '10101101');`.