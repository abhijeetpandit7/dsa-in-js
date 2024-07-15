// Divide & merge

function mergeSort(arr) {
  function merge(low, mid, high) {
    let temp = [],
      left = low,
      right = mid + 1;
    while (left <= mid && right <= high) {
      if (arr[left] < arr[right]) temp.push(arr[left++]);
      else temp.push(arr[right++]);
    }
    while (left <= mid) {
      temp.push(arr[left++]);
    }
    while (right <= high) {
      temp.push(arr[right++]);
    }
    for (let i = low; i <= high; i++) {
      arr[i] = temp[i - low];
    }
  }
  return (function sort(low, high) {
    if (low == high) return;
    const mid = Math.trunc((low + high) / 2);
    sort(low, mid);
    sort(mid + 1, high);
    merge(low, mid, high);
    return arr;
  })(0, arr.length - 1);
}

module.exports = { mergeSort };
