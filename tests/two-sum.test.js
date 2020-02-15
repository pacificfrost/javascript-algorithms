const test = require('ava');

const solutions = require('../src/two-sum.js');

const arr = [3, 5, 2, -4, 8, 11];
const target = 7;

test.before(() => {
  solutions.twoSum(arr, target);
  solutions.twoSumFast(arr, target);
});

test('twoSum - Should return correct value', t => {
  const indices = solutions.twoSum(arr, target);

  t.is(indices[0], 1);
  t.is(indices[1], 2);
});

test('twoSumFast - Should return correct value', async t => {
  const indices = solutions.twoSumFast(arr, target);

  t.is(indices[0], 1);
  t.is(indices[1], 2);
});
