function iterativeFirstOccurence(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) return i;
  }
  return -1;
}

function recursiveFirstOccurence(arr, key, index = 0) {
  if (index === arr.length) return -1;
  if (arr[index] === key) return index;
  return recursiveFirstOccurence(arr, key, index + 1);
}

console.log(iterativeFirstOccurence([1, 2, 3, 3, 5], 0));
console.log(recursiveFirstOccurence([1, 2, 3, 3, 5], 0));
