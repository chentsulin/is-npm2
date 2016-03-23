# is-npm2

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> Determinate whether npm version is 2.


## Install

```
$ npm install is-npm2
```


## Usage

```js
var isNpm2 = require('is-npm2');

isNpm2()
.then(is2 => {
  console.log(is2); // true or false
});
//=>
```


## API

### isNpm2()


## License

MIT © [C.T. Lin](https://github.com/chentsulin/is-npm2)

[npm-image]: https://badge.fury.io/js/is-npm2.svg
[npm-url]: https://npmjs.org/package/is-npm2
[travis-image]: https://travis-ci.org/chentsulin/is-npm2.svg
[travis-url]: https://travis-ci.org/chentsulin/is-npm2
[coveralls-image]: https://coveralls.io/repos/chentsulin/is-npm2/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/chentsulin/is-npm2?branch=master
[david_img]: https://david-dm.org/chentsulin/is-npm2.svg
[david_site]: https://david-dm.org/chentsulin/is-npm2

