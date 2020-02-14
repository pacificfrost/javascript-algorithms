const reverseString = str => {
  console.time('reverseString');

  const newStr = str
    .split('')
    .reverse()
    .join('');

  console.timeEnd('reverseString');

  return newStr;
};

module.exports = {
  reverseString,
};
