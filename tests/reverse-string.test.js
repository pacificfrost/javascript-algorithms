const test = require('ava');

const solutions = require('../src/reverse-string.js');

const string1 = 'Hello World';
const string2 = 'fubAR';
const string3 = '!123456!';

test.before(() => {
  solutions.reverseString(string1);
});

test('reverseString - Should return reversed string', t => {
  t.is(solutions.reverseString(string1), 'dlroW olleH');
  t.is(solutions.reverseString(string2), 'RAbuf');
  t.is(solutions.reverseString(string3), '!654321!');
});
