const test = require('ava');

const solutions = require('../src/reverse-int.js');

const int1 = 1234;
const int2 = 4000;
const int3 = -54;

test('reverseIntA - Should return reversed int as number', t => {
  t.is(solutions.reverseIntA(int1), 4321);
  t.is(solutions.reverseIntA(int2), 4);
  t.is(solutions.reverseIntA(int3), -45);
});

test('reverseIntB - Should return reversed int as number', t => {
  t.is(solutions.reverseIntB(int1), 4321);
  t.is(solutions.reverseIntB(int2), 4);
  t.is(solutions.reverseIntB(int3), -45);
});
