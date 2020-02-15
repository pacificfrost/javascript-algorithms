/**
 * Fizzbuzz
 * @param {number} num
 * @return {object}
 */
const fizzbuzz = num => {
  const result = {
    buzz: 0,
    fizz: 0,
    fizzbuzz: 0,
    numsPrinted: [],
  };

  for (let i = 1; i <= num; i++) {
    const goesInto3 = i % 3 === 0;
    const goesInto5 = i % 5 === 0;

    if (goesInto3 && goesInto5) {
      result.fizzbuzz += 1;
    } else if (goesInto3) {
      result.fizz += 1;
    } else if (goesInto5) {
      result.buzz += 1;
    } else {
      result.numsPrinted.push(i);
    }
  }

  return result;
};

module.exports = {
  fizzbuzz,
};
