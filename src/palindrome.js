/**
 * Palindrome a
 * @param {string} str
 * @return {boolean}
 */
const palindromeA = str => {
  const newStr = str
    .split('')
    .reverse()
    .join('');

  return newStr.toLowerCase() === str.toLowerCase();
};

/**
 * Palindrome b
 * @param {string} str
 * @return {boolean}
 */
const palindromeB = str => {
  return str.split('').every((char, index) => {
    const position = str.length - index - 1;

    return char.toLowerCase() === str[position].toLowerCase();
  });
};

module.exports = {
  palindromeA,
  palindromeB,
};
