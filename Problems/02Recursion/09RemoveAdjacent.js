function removeAdjacentDuplicates(str) {
  return (function recurse(index, prevChar) {
    if (index < 0) return "";
    const char = str.at(index);
    return recurse(index - 1, char) + (char === prevChar ? "" : char);
  })(str.length - 1);
}

console.log(removeAdjacentDuplicates("aaabcc"));
