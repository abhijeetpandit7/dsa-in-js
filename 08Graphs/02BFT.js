const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function bft(graph, start) {
  const queue = [start],
    visited = new Set();
  while (queue.length) {
    const node = queue.shift();
    visited.add(node);
    graph[node].forEach((neighbour) => {
      !visited.has(neighbour) && queue.push(neighbour);
    });
  }
  return visited.values();
}

console.log(bft(graph, "a"));
