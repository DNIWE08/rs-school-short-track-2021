/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let ind = Math.round(array.length / 2);
  let half = ind;
  while (!(array[ind] === value)) {
    half = Math.round(half / 2);
    if (array[ind] < value) {
      ind += half;
    } else {
      ind -= half;
    }
  }
  return ind;
}

module.exports = findIndex;
