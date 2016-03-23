'use strict';

var execa = require('execa');

module.exports = function isNpm2() {
  return execa
    .shell('npm -v')
    .then(res => res.stdout.split('.')[0] === '2');
};
