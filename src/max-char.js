/**
 * Max char a
 * @param {string} str
 * @return {string}
 */
const maxCharA = str => {
  const arr = str.split('');
  const charMap = {};

  let maxChar;

  for (const char of arr) {
    charMap[char] = charMap[char] === undefined ? 1 : charMap[char] + 1;
  }

  for (const char in charMap) {
    maxChar =
      !charMap[maxChar] || charMap[char] > charMap[maxChar] ? char : maxChar;
  }

  return maxChar;
};

module.exports = {
  maxCharA,
};
