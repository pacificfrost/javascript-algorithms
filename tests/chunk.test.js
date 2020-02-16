const test = require('ava');

const solutions = require('../src/chunk.js');

const testArrA = [1, 2, 3, 4, 5, 6, 7];
const testLenA = 2;
const testResA = [[1, 2], [3, 4], [5, 6], [7]];

const testArrB = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testLenB = 3;
const testResB = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const testArrC = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testLenC = 4;
const testResC = [[1, 2, 3, 4], [5, 6, 7, 8], [9]];

test('chunk - A - Should return correct array lengths', t => {
  const solutionA = solutions.chunk(testArrA, testLenA);

  t.is(solutionA[0].length, testResA[0].length);
  t.is(solutionA[1].length, testResA[1].length);
  t.is(solutionA[2].length, testResA[2].length);
  t.is(solutionA[3].length, testResA[3].length);
});

test('chunk - B - Should return correct array lengths', t => {
  const solutionB = solutions.chunk(testArrB, testLenB);

  t.is(solutionB[0].length, testResB[0].length);
  t.is(solutionB[1].length, testResB[1].length);
  t.is(solutionB[2].length, testResB[2].length);
});

test('chunk - C - Should return correct array lengths', t => {
  const solutionC = solutions.chunk(testArrC, testLenC);

  t.is(solutionC[0].length, testResC[0].length);
  t.is(solutionC[1].length, testResC[1].length);
  t.is(solutionC[2].length, testResC[2].length);
});
