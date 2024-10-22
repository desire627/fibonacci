import { assert } from 'chai';
import { fibonacci } from '../fabonacci.js';

describe('Fibonacci function', () => {
  it('should return 0 for fibonacci(0)', () => {
    assert.equal(fibonacci(0), 0);
  });


it('should return 1 for fibonacci(1)', () => {
  assert.equal(fibonacci(1), 1);
   });
});