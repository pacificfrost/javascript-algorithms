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
  t.is(solutions.capitalizeA(stringB), resultB);
  t.is(solutions.capitalizeA(stringC), resultC);
});

test('capitalizeB - A - Should capitalize string', t => {
  t.is(solutions.capitalizeB(stringA), resultA);
  t.is(solutions.capitalizeB(stringB), resultB);
  t.is(solutions.capitalizeB(stringC), resultC);
});

test('capitalizeC - A - Should capitalize string', t => {
  t.is(solutions.capitalizeC(stringA), resultA);
  t.is(solutions.capitalizeC(stringB), resultB);
  t.is(solutions.capitalizeC(stringC), resultC);
});
