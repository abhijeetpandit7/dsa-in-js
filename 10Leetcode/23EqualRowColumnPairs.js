// leetcode.com/problems/equal-row-and-column-pairs
 function equalPairs1(grid) {
  const rows = new Map(), cols = new Map();
  for (let j = 0; j < grid.length; j++) {
      let col = '', row = ''
      for (let i = 0; i < grid.length; i++) {
          col += grid[i][j] + ',';
          row += grid[j][i] + ',';
      }
      cols.set(col, (cols.get(col) || 0) + 1)
      rows.set(row, (rows.get(row) || 0) + 1)
  }
  let pairs = 0
  for (const [row, freq] of rows) {
      if (cols.has(row)) pairs += freq * cols.get(row)
  }
  return pairs
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
function equalPairs(grid) {
  const rows = new Map();
    for (let i = 0; i < grid.length; i++) {
        const key = grid[i].join(',') + ',';
        rows.set(key, (rows.get(key) ?? 0) + 1)
    }
    let pairs = 0
    for (let j = 0; j < grid.length; j++) {
        let col = ''
        for (let i = 0; i < grid.length; i++) {
            col += grid[i][j] + ',';
        }
        if (rows.has(col)) pairs += rows.get(col)
    }
    return pairs
};

module.exports = {equalPairs}