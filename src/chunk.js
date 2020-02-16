/**
 * Chunk
 * @param {array} arr
 * @param {number} len
 * @return {array}
 */
const chunk = (arr, len) => {
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

module.exports = {
  chunk,
};
