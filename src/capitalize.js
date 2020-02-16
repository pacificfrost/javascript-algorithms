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

module.exports = {
  capitalizeA,
};
