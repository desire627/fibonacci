import { assert } from 'chai';
import { fibonacci } from '../fabonacci.js';

describe('Fibonacci function', () => {
  it('should return 0 for fibonacci(0)', () => {
    assert.equal(fibonacci(0), 0);
  });

  it('should return 1 for fibonacci(1)', () => {
    assert.equal(fibonacci(1), 1);
  });

  it('should return 1 for fibonacci(2)', () => {
    assert.equal(fibonacci(2), 1);
  });

  it('should return 2 for fibonacci(3)', () => {
    assert.equal(fibonacci(3), 2);
  });

  it('should return 3 for fibonacci(4)', () => {
    assert.equal(fibonacci(4), 3);
  });

  it('should return 5 for fibonacci(5)', () => {
    assert.equal(fibonacci(5), 5);
  });
});
