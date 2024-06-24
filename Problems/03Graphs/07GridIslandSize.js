/*
  Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.
*/

const grid = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

function getIslandMinMax(grid) {
  const visited = new Set(),
    sizes = [];

  function dfs(r, c) {
    if (
      r < 0 ||
      r >= grid.length ||
      c < 0 ||
      c >= grid[0].length ||
      grid[r][c] === "W" ||
      visited.has(`${r},${c}`)
    )
      return 0;

    visited.add(`${r},${c}`);
    return 1 + +dfs(r + 1, c) + dfs(r, c + 1) + dfs(r - 1, c) + dfs(r, c - 1);
    // let size = 1;
    // size += dfs(r + 1, c);
    // size += dfs(r, c + 1);
    // size += dfs(r - 1, c);
    // size += dfs(r, c - 1);
    // return size;
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (visited.has(`${r},${c}`)) continue;
      const size = dfs(r, c);
      size && sizes.push(size);
    }
  }
  return sizes;
}

console.log(getIslandMinMax(grid));
