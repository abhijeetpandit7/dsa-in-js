function iterativePalindrome(str) {
  const len = str.length;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i].toLowerCase() !== str[len - i - 1].toLowerCase()) return false;
  }
  return true;
}

function recursivePalindrome(str) {
  const len = str.length;
  const midIndex = Math.floor(len / 2);
  return (function recurse(index) {
    if (index < midIndex) return true;
    return (
      str[index].toLowerCase() === str[len - index - 1].toLowerCase() &&
      recurse(index - 1)
    );
  })(len - 1);
}

console.log(iterativePalindrome("Radar"));
console.log(recursivePalindrome("Radar"));
