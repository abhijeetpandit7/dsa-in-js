function pathMinCost(grid) {
  const memo = {};
  return (function recurse(x, y) {
    if (x >= grid.length || y >= grid[0].length) return -1;
    if (x === grid.length - 1 && y === grid[0].length - 1) return grid[x][y];
    const pos = `${x},${y}`;
    if (pos in memo) return memo[pos];

    let minCost = Number.MAX_SAFE_INTEGER;
    for (const [m, n] of [
      [x + 1, y],
      [x, y + 1],
    ]) {
      const result = recurse(m, n);
      if (result > -1) minCost = Math.min(minCost, result);
    }
    memo[pos] = grid[x][y] + minCost;
    return memo[pos];
  })(0, 0);
}

const grid1 = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log(pathMinCost(grid1)); // Output: 7

const grid2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(pathMinCost(grid2)); // Output: 21

const grid3 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
console.log(pathMinCost(grid3)); // Output: 5
