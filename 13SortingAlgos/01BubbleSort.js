// Push max to right/left by adjacent swaps

function bubbleSort(arr) {
  function swap(m, n) {
    [arr[m], arr[n]] = [arr[n], arr[m]];
  }
  for (let i = arr.length - 1; i > 0; i--) {
    let didSwap = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1);
        didSwap = true;
      }
    }
    if (!didSwap) break;
  }
  return arr;
}

module.exports = { bubbleSort };
