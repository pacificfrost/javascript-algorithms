const test = require('ava');

const solutions = require('../src/capitalize.js');

const stringA = 'let us go for a walk!';
const stringB = 'was that an albatross??';
const stringC = 'crikey, that was an interesting one.';

const resultA = 'Let Us Go For A Walk!';
const resultB = 'Was That An Albatross??';
const resultC = 'Crikey, That Was An Interesting One.';

test('capitalizeA - A - Should capitalize string', t => {
  t.is(solutions.capitalizeA(stringA), resultA);
});

test('capitalizeA - B - Should capitalize string', t => {
  t.is(solutions.capitalizeA(stringB), resultB);
});

test('capitalizeA - C - Should capitalize string', t => {
  t.is(solutions.capitalizeA(stringC), resultC);
});

test('capitalizeB - A - Should capitalize string', t => {
  t.is(solutions.capitalizeB(stringA), resultA);
});

test('capitalizeB - B - Should capitalize string', t => {
  t.is(solutions.capitalizeB(stringB), resultB);
});

test('capitalizeB - C - Should capitalize string', t => {
  t.is(solutions.capitalizeB(stringC), resultC);
});

test('capitalizeC - A - Should capitalize string', t => {
  t.is(solutions.capitalizeC(stringA), resultA);
});

test('capitalizeC - B - Should capitalize string', t => {
  t.is(solutions.capitalizeC(stringB), resultB);
});

test('capitalizeC - C - Should capitalize string', t => {
  t.is(solutions.capitalizeC(stringC), resultC);
});
