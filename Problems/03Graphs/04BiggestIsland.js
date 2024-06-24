const graph = {
  1: ["2"],
  2: ["1", "3"],
  3: ["2"],
  4: ["5"],
  5: ["4", "6", "7"],
  6: ["5"],
  7: ["5", "8"],
  8: ["7"],
  9: [],
};

function biggestIsland(graph) {
  const visited = new Set();
  let biggest = 0;
  function dfs(node) {
    if (visited.has(node)) return 0;
    visited.add(node);
    let count = 1;
    for (const neighbour of graph[node]) {
      count += dfs(neighbour);
    }
    return count;
  }
  for (const node in graph) {
    if (visited.has(node)) continue;
    biggest = Math.max(biggest, dfs(node));
  }
  return biggest;
}

console.log(biggestIsland(graph));
