/**
 * Chunk a
 * @param {array} arr
 * @param {number} len
 * @return {array}
 */
const chunkA = (arr, len) => {
  const result = [];

  let tempArr = [];

  arr.forEach((value, index) => {
    if (tempArr.length !== len) {
      tempArr.push(value);
    } else {
      result.push(tempArr);

      tempArr = [value];
    }

    if (index === arr.length - 1) {
      result.push(tempArr);
    }
  });

  return result;
};

/**
 * Chunk b
 * @param {array} arr
 * @param {number} len
 * @return {array}
 */
const chunkB = (arr, len) => {
  const result = [];

  let index = 0;

  do {
    result.push(arr.slice(index, index + len));

    index += len;
  } while (index <= arr.length - 1);

  return result;
};

module.exports = {
  chunkA,
  chunkB,
};
