import { assert } from 'chai';
import { fibonacci } from '../fabonacci.js';

describe('Fibonacci function', () => {
  it('should return 0 for fibonacci(0)', () => {
    assert.equal(fibonacci(0), 0);
  });
});
