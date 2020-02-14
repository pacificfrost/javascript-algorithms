/**
 * Two sum
 * @param {array} arr
 * @param {number} target
 */
const twoSum = (arr, target) => {
  console.time('twoSum');

  const indices = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        indices.push(i, j);
      }
    }
  }

  console.timeEnd('twoSum');

  return indices;
};

/**
 * Two sum fast
 * @param {array} arr
 * @param {number} target
 */
const twoSumFast = (arr, target) => {
  console.time('twoSumFast');

  let indices;
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (hash[target - num] !== undefined) {
      indices = [hash[target - num], i];

      break;
    }

    hash[num] = i;
  }

  console.timeEnd('twoSumFast');

  return indices;
};

module.exports = {
  twoSum,
  twoSumFast,
};
