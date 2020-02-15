const test = require('ava');

const solutions = require('../src/fizzbuzz.js');

const num1 = 5;
const num2 = 17;
const num3 = 30;

const result1 = {
  buzz: 1,
  fizz: 1,
  fizzbuzz: 0,
  numsPrinted: [1, 2, 4],
};

const result2 = {
  buzz: 2,
  fizz: 4,
  fizzbuzz: 1,
  numsPrinted: [1, 2, 4, 7, 8, 11, 13, 14, 16, 17],
};

const result3 = {
  buzz: 4,
  fizz: 8,
  fizzbuzz: 2,
  numsPrinted: [1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19, 22, 23, 26, 28, 29],
};

test('fizzbuzz - Should return correct result object', t => {
  const solutionA = solutions.fizzbuzz(num1);
  const solutionB = solutions.fizzbuzz(num2);
  const solutionC = solutions.fizzbuzz(num3);

  t.is(solutionA.buzz, result1.buzz);
  t.is(solutionA.fizz, result1.fizz);
  t.is(solutionA.fizzbuzz, result1.fizzbuzz);
  t.is(solutionA.numsPrinted.length, result1.numsPrinted.length);

  t.is(solutionB.buzz, result2.buzz);
  t.is(solutionB.fizz, result2.fizz);
  t.is(solutionB.fizzbuzz, result2.fizzbuzz);
  t.is(solutionB.numsPrinted.length, result2.numsPrinted.length);

  t.is(solutionC.buzz, result3.buzz);
  t.is(solutionC.fizz, result3.fizz);
  t.is(solutionC.fizzbuzz, result3.fizzbuzz);
  t.is(solutionC.numsPrinted.length, result3.numsPrinted.length);
});
