const grid = [
  [1, 0, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1],
];

function countIsland(grid) {
  const visited = new Set(),
    rows = grid.length,
    cols = grid[0].length;
  let total = 0;

  function dfs(x, y) {
    if (x < 0 || x >= rows || y < 0 || y >= cols) return 0;
    // console.log({ x, y, val: grid?.[x]?.[y], has: visited.has(`${x},${y}`) });
    if (grid[x][y] === 0 || visited.has(`${x},${y}`)) return 0;
    visited.add(`${x},${y}`);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x + 1, y);
    dfs(x, y - 1);
    return 1;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      total += dfs(row, col);
    }
  }

  return total;
}

console.log(countIsland(grid));
