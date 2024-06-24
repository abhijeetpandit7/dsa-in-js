const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function iterativeDFT(graph, start) {
  const stack = [start],
    visited = new Set();
  while (stack.length) {
    const node = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);
    graph[node].forEach((neighbour) => {
      stack.push(neighbour);
    });
  }
  return visited.values();
}

function recursiveDFT(graph, start) {
  const visited = new Set();
  (function recurse(node) {
    if (visited.has(node)) return;
    visited.add(node);
    graph[node].forEach((neighbour) => {
      recurse(neighbour);
    });
  })(start);
  return visited.values();
}

console.log(iterativeDFT(graph, "a"));
console.log(recursiveDFT(graph, "a"));
