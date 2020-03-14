const test = require('ava');

const solutions = require('../src/steps.js');

test('steps - Should create 1 step', t => {
  const result = solutions.stepsA(1);

  t.is(result.length, 1);
  t.is(result[0], '#');
});

test('steps - Should create 12 steps', t => {
  const numOfSteps = 12;
  const result = solutions.stepsA(numOfSteps);

  t.is(result.length, 12);

  for (let index = 0; index < result.length; index++) {
    const res = result[index];

    const hashes = res.split(' ').join('');
    const spaces = res.split('#').join('');

    const hashLength = index + 1;
    const spaceLength = numOfSteps - hashLength;

    t.is(hashes.length, hashLength);
    t.is(spaces.length, spaceLength);
  }
});
