// Select minimums
/**
 * @param {Array} arr
 * @returns {Array}
 */
function selectionSort(arr) {
  function swap(m, n) {
    [arr[m], arr[n]] = [arr[n], arr[m]];
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    swap(i, min);
  }
  return arr;
}

module.exports = { selectionSort };
