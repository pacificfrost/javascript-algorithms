/**
 * Capitalize a
 * @param {string} str
 * @return {string}
 */
const capitalizeA = str => {
  const words = str.split(' ');
  const newWords = [];

  for (let word of words) {
    const letters = word.split('');
    letters[0] = letters[0].toUpperCase();

    newWords.push(letters.join(''));
  }

  return newWords.join(' ');
};

/**
 * Capitalize b
 * @param {string} str
 * @return {string}
 */
const capitalizeB = str => {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
};

/**
 * Capitalize c
 * @param {string} str
 * @return {string}
 */
const capitalizeC = str => {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    result += str[i - 1] === ' ' ? str[i].toUpperCase() : str[i];
  }

  return result;
};

module.exports = {
  capitalizeA,
  capitalizeB,
  capitalizeC,
};
