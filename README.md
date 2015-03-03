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


## Usage

### In a Node.js project
`var base = require('base')`

#### API
`base.api(from, to, input)`.

`from` and `to` are bases to convert between and `input` is the data to convert.

Example: `base.api(10, 16, 255)`.

#### Raw
`base[from].to[to](input)`

`from` and `to` are bases to convert between and `input` is the data to convert

Example: `base[10].to[16](255)`

### CLI
Incoming.