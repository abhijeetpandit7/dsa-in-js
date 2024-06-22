function iterativeFibonacciSeries(n) {
  let n0 = 0,
    n1 = 1;
  for (let i = 0; i < n; i++) {
    const temp = n0 + n1;
    n0 = n1;
    n1 = temp;
  }
  return n0;
}

function recursiveFibonacciSeries(n) {
  const cache = { 0: 0, 1: 1 };
  return (function recurse(n) {
    if (n <= 1) return cache[n];
    if (!cache[n]) {
      // console.log(`f(${n})`);
      cache[n] = recurse(n - 1) + recurse(n - 2);
      // console.log(`caching {${n}: ${cache[n]}}`);
    }
    return cache[n];
  })(n);
}

console.log(iterativeFibonacciSeries(5));
console.log(recursiveFibonacciSeries(10));
