// Pick a pivot and place it in its correct place into the sorted array
// Smaller on left & larger on right

// Pointer starting at 0
function quickSortFromStart(arr) {
  function swap(m, n) {
    [arr[m], arr[n]] = [arr[n], arr[m]];
  }
  function recurse(low, high) {
    if (high <= low) return;
    const pivot = arr[low];
    let i = low,
      j = high;
    while (i < j) {
      while (arr[i] <= pivot && i < high) {
        i++;
      }
      while (j > low && arr[j] > pivot) {
        j--;
      }
      if (i < j) swap(i, j);
    }
    swap(low, j);
    recurse(low, j - 1);
    recurse(j + 1, high);
  }
  recurse(0, arr.length - 1);
  return arr;
}

// Pointer starting at -1. Ignore big
function quickSortFromEnd(arr) {
  function swap(m, n) {
    [arr[m], arr[n]] = [arr[n], arr[m]];
  }
  function recurse(low, high) {
    if (low >= high) return;
    const pivot = arr[high];
    let left = low - 1,
      right = low;
    while (right < high) {
      if (arr[right] <= pivot) {
        swap(++left, right);
      }
      right++;
    }
    swap(++left, right);
    recurse(low, left - 1);
    recurse(left + 1, high);
  }
  recurse(0, arr.length - 1);
  return arr;
}

module.exports = { quickSortFromStart, quickSortFromEnd };
