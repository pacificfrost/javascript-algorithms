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

test('chunkA - A - Should return correct array lengths', t => {
  const solution = solutions.chunkA(testArrA, testLenA);

  t.is(solution[0].length, testResA[0].length);
  t.is(solution[1].length, testResA[1].length);
  t.is(solution[2].length, testResA[2].length);
  t.is(solution[3].length, testResA[3].length);
});

test('chunkA - B - Should return correct array lengths', t => {
  const solution = solutions.chunkA(testArrB, testLenB);

  t.is(solution[0].length, testResB[0].length);
  t.is(solution[1].length, testResB[1].length);
  t.is(solution[2].length, testResB[2].length);
  t.is(solution[3], testResB[3]);
});

test('chunkA - C - Should return correct array lengths', t => {
  const solution = solutions.chunkA(testArrC, testLenC);

  t.is(solution[0].length, testResC[0].length);
  t.is(solution[1].length, testResC[1].length);
  t.is(solution[2].length, testResC[2].length);
});

test('chunkB - A - Should return correct array lengths', t => {
  const solution = solutions.chunkB(testArrA, testLenA);

  t.is(solution[0].length, testResA[0].length);
  t.is(solution[1].length, testResA[1].length);
  t.is(solution[2].length, testResA[2].length);
  t.is(solution[3].length, testResA[3].length);
});

test('chunkB - B - Should return correct array lengths', t => {
  const solution = solutions.chunkB(testArrB, testLenB);

  t.is(solution[0].length, testResB[0].length);
  t.is(solution[1].length, testResB[1].length);
  t.is(solution[2].length, testResB[2].length);
  t.is(solution[3], testResB[3]);
});

test('chunkB - C - Should return correct array lengths', t => {
  const solution = solutions.chunkB(testArrC, testLenC);

  t.is(solution[0].length, testResC[0].length);
  t.is(solution[1].length, testResC[1].length);
  t.is(solution[2].length, testResC[2].length);
});
