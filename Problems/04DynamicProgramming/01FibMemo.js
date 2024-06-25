function fibMemo(num) {
  const cache = { 0: 0, 1: 1 };
  return (function recurse(n) {
    if (n < 2 || cache[n]) return cache[n];
    cache[n] = recurse(n - 1) + recurse(n - 2);
    return cache[n];
  })(num);
}

console.log(fibMemo(8));
