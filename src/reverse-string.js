/**
 * Reverse string a
 * @param {string} str
 * @return {string}
 */
const reverseStringA = str => {
  const newStr = str
    .split('')
    .reverse()
    .join('');

  return newStr;
};

/**
 * Reverse string b
 * @param {string} str
 * @return {string}
 */
const reverseStringB = str => {
  let newStr = '';

  for (let i = str.length - 1; i !== -1; i--) {
    newStr = `${newStr}${str[i]}`;
  }

  return newStr;
};

module.exports = {
  reverseStringA,
  reverseStringB,
};
