function uniquePaths(m, n) {
  const memo = {};
  return (function recurse(x, y) {
    if (x >= m || y >= n) return 0;
    if (x === m - 1 && y === n - 1) return 1;
    const pos = `${x},${y}`;
    if (pos in memo) return memo[pos];

    // let paths = 0;
    // for ([r, c] of [
    //   [x, y + 1],
    //   [x + 1, y],
    // ]) {
    //   paths += recurse(r, c);
    // }
    // memo[pos] = paths;
    memo[pos] = recurse(x + 1, y) + recurse(x, y + 1);
    return memo[pos];
  })(0, 0);
}

console.log(uniquePaths(3, 7)); // 28
