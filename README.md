# Base

Base conversion CLI and API, using either a JS or a C++ implementation.

[![Inline docs](https://inch-ci.org/github/opensoars/base.svg?branch=master)](https://inch-ci.org/github/opensoars/base)
[![Build Status](https://travis-ci.org/opensoars/base.svg)](https://travis-ci.org/opensoars/base)
[![Coverage Status](https://coveralls.io/repos/opensoars/base/badge.svg?branch=master)](https://coveralls.io/r/opensoars/base?branch=master)
[![Dependency Status](https://david-dm.org/opensoars/base.svg?style=flat)](https://david-dm.org/opensoars/base)
[![Development Dependency Status](https://david-dm.org/opensoars/base/dev-status.svg?style=flat)](https://david-dm.org/opensoars/base#info=devDependencies&view=table)

---


## Dependencies
* JS implementation
    - [Node.js](https://nodejs.org/)
* C++ Implementation
    - C++ compiler toolchain
    - [node-gyp](https://github.com/TooTallNate/node-gyp)
    - Node.js modules
        + [nan](https://github.com/rvagg/nan)
        + [node-bindings](https://github.com/TooTallNate/node-bindings)


## Install
1. Clone source
2. `npm install`
3. To use C++ implementations: `npm run build`


## Usage

### CLI
    $ base from to data implementation

`from` and `to` are bases to convert between, `input` is the data to convert and `implementation` is a known implementation (js, cpp). `from`, `to` and `data` are required. `implementation` is optional, defaults to cpp.

Example:

    $ base 2 10 "0101001101010101" js


### In a Node.js project
    base = require('base')


#### API
    base.api(from, to, input, implementation)

`from` and `to` are bases to convert between, `input` is the data to convert and `implementation` is a known implementation (js, cpp). `from`, `to` and `data` are required. `implementation` is optional, defaults to cpp.

Example:
    
    base.api(10, 16, 255, 'js')


#### Raw
    base[from][implementation][to](input)

`from` and `to` are bases to convert between, `input` is the data to convert and `implementation` is a known implementation (js, cpp).

Example:

    base[10]['cpp'][16](255)


## Tests and coverage information
     npm run local_test
