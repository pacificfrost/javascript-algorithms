const test = require('ava');

const solutions = require('../src/max-char.js');

const string1 = 'testing test 123';
const string2 = 'hello';
const string3 = 'shindig';

test('palindromeA - Should return correct char', t => {
  t.is(solutions.maxCharA(string1), 't');
  t.is(solutions.maxCharA(string2), 'l');
  t.is(solutions.maxCharA(string3), 'i');
});
