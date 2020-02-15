const test = require('ava');

const solutions = require('../src/reverse-string.js');

const string1 = 'Hello World';
const string2 = 'fubAR';
const string3 = '!123456!';

test('reverseStringA - Should return reversed string', t => {
  t.is(solutions.reverseStringA(string1), 'dlroW olleH');
  t.is(solutions.reverseStringA(string2), 'RAbuf');
  t.is(solutions.reverseStringA(string3), '!654321!');
});

test('reverseStringB - Should return reversed string', t => {
  t.is(solutions.reverseStringB(string1), 'dlroW olleH');
  t.is(solutions.reverseStringB(string2), 'RAbuf');
  t.is(solutions.reverseStringB(string3), '!654321!');
});
