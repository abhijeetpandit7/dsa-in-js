const { createGraph } = require("./02UndirectedPath");

const edges = [
  ["a", "b"],
  ["b", "c"],
  ["c", "d"],
  ["d", "e"],
  ["e", "f"],
  ["f", "a"],
];
const edges1 = [
  ["a", "b"],
  ["b", "c"],
  ["c", "d"],
  ["d", "e"],
  ["e", "f"],
  ["f", "g"],
  ["g", "h"],
  ["h", "a"],
];

const graph = createGraph(edges);
const graph1 = createGraph(edges1);

function shortestPath(graph, start, end) {
  const queue = [[start, 0]],
    visited = new Set();
  while (queue.length) {
    const [node, dist] = queue.shift();
    // console.log(`current: ${node},${dist}; next: ${queue}`);
    if (node === end) return dist;
    if (visited.has(node)) continue;
    visited.add(node);
    for (const neighbour of graph[node]) {
      // if (visited.has(neighbour))
      //   console.log(`\tskipping ${neighbour} from ${node}`);
      // else console.log(`\tadding ${neighbour} from ${node}`);
      !visited.has(neighbour) && queue.push([neighbour, dist + 1]);
    }
  }
  return false;
}

console.log(graph1);
console.log(shortestPath(graph, "a", "d"));
console.log(shortestPath(graph1, "a", "g"));
