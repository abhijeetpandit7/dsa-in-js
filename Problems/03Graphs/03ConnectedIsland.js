const { createGraph } = require("./02UndirectedPath");

const edges = [
  ["1", "2"],
  ["2", "3"],
  ["4", "5"],
  ["5", "6"],
  ["5", "7"],
  ["7", "8"],
  ["9"],
];

const graph = createGraph(edges);

function connectedIsland(graph) {
  const visited = new Set();
  let count = 0;
  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);
    for (const neighbour of graph[node]) {
      dfs(neighbour);
    }
  }
  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
      count++;
    }
  }
  return count;
}

console.log(graph);
console.log(connectedIsland(graph));
