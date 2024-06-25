function fibTabulation(n) {
  if (n < 2) return n;
  const table = new Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];
}

console.log(fibTabulation(5));
