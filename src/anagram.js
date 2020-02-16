const regEx = /[^\w]/g;

/**
 * Anagram a
 * @param {string} strA
 * @param {string} strB
 * @return {boolean}
 */
const anagramA = (strA, strB) => {
  const cleanStrA = strA.replace(regEx, '').toLowerCase();
  const cleanStrB = strB.replace(regEx, '').toLowerCase();

  const hashA = {};
  const hashB = {};

  for (const char of cleanStrA.split('')) {
    hashA[char] = hashA[char] ? hashA[char] + 1 : 1;
  }

  for (const char of cleanStrB.split('')) {
    hashB[char] = hashB[char] ? hashB[char] + 1 : 1;
  }

  const keysA = Object.keys(hashA);
  const keysB = Object.keys(hashB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const char of keysA) {
    if (!hashB[char] || hashB[char].length !== hashA[char].length) {
      return false;
    }
  }

  return true;
};

/**
 * Anagram b
 * @param {string} strA
 * @param {string} strB
 * @return {boolean}
 */
const anagramB = (strA, strB) => {
  return cleanString(strA) === cleanString(strB);
};

/**
 * Clean string
 * @param {string} str
 * @return {string}
 */
const cleanString = str => {
  return str
    .replace(regEx, '')
    .toLowerCase()
    .split('')
    .sort()
    .join();
};

module.exports = {
  anagramA,
  anagramB,
};
