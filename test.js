'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var exec = require('child_process').exec;
var isNpm2 = require('./');

chai.should();
chai.use(chaiAsPromised);

describe('isNpm2', () => {
  var is2;
  before((done) => {
    exec('npm -v', (err, stdout) => {
      is2 = stdout[0] === '2';
      done();
    });
  });

  it('should works', () => {
    if (is2) {
      return isNpm2().should.eventually.be.true;
    }
    return isNpm2().should.eventually.be.false;
  });
});

