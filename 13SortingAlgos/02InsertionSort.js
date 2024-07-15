// Takes an element and places it in correct order

function insertionSort(arr) {
  function swap(m, n) {
    [arr[m], arr[n]] = [arr[n], arr[m]];
  }
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (arr[j] < arr[j - 1]) {
      swap(j - 1, j);
      j--;
    }
  }
  return arr;
}

module.exports = { insertionSort };
