/**
 * Reverse int a
 * @param {number} num
 * @return {number}
 */
const reverseIntA = num => {
  const str = num.toString();

  let newStr = '';
  let positive = true;

  for (const char of str.split('')) {
    if (char === '-') {
      positive = false;

      continue;
    }

    newStr = `${char}${newStr}`;
  }

  if (!positive) {
    newStr = `-${newStr}`;
  }

  return parseInt(newStr);
};

/**
 * Reverse int b
 * @param {number} num
 * @return {number}
 */
const reverseIntB = num => {
  const str = num
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(str) * Math.sign(num);
};

module.exports = {
  reverseIntA,
  reverseIntB,
};
