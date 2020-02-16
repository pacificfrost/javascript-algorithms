const test = require('ava');

const solutions = require('../src/anagram.js');

const testAstringA = 'debit card';
const testAstringB = 'bad credit';

const testBstringA = 'DEBIT card!';
const testBstringB = '!bad cReDiT@';

const testCstringA = 'credit card';
const testCstringB = 'bad credit';

test('anagramA - A - Should be an anagram', t => {
  t.is(solutions.anagramA(testAstringA, testAstringB), true);
});

test('anagramA - B - Should be an anagram', t => {
  t.is(solutions.anagramA(testBstringA, testBstringB), true);
});

test('anagramA - C - Should not be an anagram', t => {
  t.is(solutions.anagramA(testCstringA, testCstringB), false);
});

test('anagramB - A - Should be an anagram', t => {
  t.is(solutions.anagramB(testAstringA, testAstringB), true);
});

test('anagramB - B - Should be an anagram', t => {
  t.is(solutions.anagramB(testBstringA, testBstringB), true);
});

test('anagramB - C - Should not be an anagram', t => {
  t.is(solutions.anagramB(testCstringA, testCstringB), false);
});
