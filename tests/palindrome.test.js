const test = require('ava');

const solutions = require('../src/palindrome.js');

const string1 = 'racecar';
const string2 = 'hello';
const string3 = 'Racecar';

test('palindromeA - Should return true if string is palindrome', t => {
  t.is(solutions.palindromeA(string1), true);
  t.is(solutions.palindromeA(string2), false);
  t.is(solutions.palindromeA(string3), true);
});

test('palindromeB - Should return true if string is palindrome', t => {
  t.is(solutions.palindromeB(string1), true);
  t.is(solutions.palindromeB(string2), false);
  t.is(solutions.palindromeB(string3), true);
});
