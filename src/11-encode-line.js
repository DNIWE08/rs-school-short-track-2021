/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let resStr = '';
  let i = 0;
  while (i < arr.length) {
    let count = 1;
    while (arr[i] === arr[i + 1]) {
      i++;
      count++;
    }
    resStr += count === 1 ? '' : count;
    resStr += arr[i];
    i++;
  }
  return resStr;
}

module.exports = encodeLine;
