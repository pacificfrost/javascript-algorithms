/**
 * Steps a
 * @param {number} n
 */
const stepsA = n => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    const hash = new Array(i).fill('#');
    const space = new Array(n - i).fill(' ');

    const step = [...hash, ...space].join('');

    result.push(step);
  }

  return result;
};

module.exports = {
  stepsA,
};
