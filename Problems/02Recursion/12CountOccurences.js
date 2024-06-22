function iterativeCountOccurences(arr, key) {
  let occ = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) occ++;
  }
  return occ;
}

function recursiveCountOccurences(arr, key) {
  return (function recurse(index) {
    if (index < 0) return 0;
    return (arr[index] === key) + recurse(index - 1);
  })(arr.length - 1);
}

console.log(iterativeCountOccurences([1, 2, 4, 2, 4, 2, 6], 2));
console.log(recursiveCountOccurences([1, 2, 4, 2, 4, 2, 6], 2));
