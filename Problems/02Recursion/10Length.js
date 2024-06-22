function getLength(str) {
  return (function recurse(index) {
    if (!str[index]) return 0;
    return 1 + recurse(index + 1);
  })(0);
}

console.log(getLength("four"));
