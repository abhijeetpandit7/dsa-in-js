/*
  Given two nodes (start and dest) in a directed acyclic graph (DAG), return true if there is a directed path from start to dest, otherwise return false.

  Example 1:

  Input: start = 1, dest = 3
  Output: true
  Explanation: There is a directed path 1 -> 2 -> 3.
  Example 2:

  Input: start = 1, dest = 4
  Output: false
  Explanation: There is no path from 1 to 4.
*/

const graph = {
  1: [2, 3, 5],
  2: [4, 6],
  3: [4, 6],
  4: [1, 2],
  5: [],
  6: [3, 5, 7],
  7: [1, 2],
};

function hasPathWithDFS(graph, start, end) {
  const stack = [start],
    visited = new Set();
  while (stack.length) {
    const node = stack.pop();
    if (node === end) return true;
    if (visited.has(node)) continue;
    visited.add(node);
    for (const neighbour of graph[node]) {
      stack.push(neighbour);
    }
  }
  return false;
}

function hasPathWithBFS(graph, start, end) {
  const queue = [start],
    visited = new Set();
  while (queue.length) {
    const node = queue.shift();
    if (node === end) return true;
    visited.add(node);
    for (const neighbour of graph[node]) {
      !visited.has(neighbour) && queue.push(neighbour);
    }
  }
  return false;
}

function recursiveHasPath(graph, start, end) {  
  const visited = new Set();
  return (function recurse(node) {
    if (node === end) return true;
    if (visited.has(node)) return false;
    visited.add(node);
    for (const neighbour of graph[node]) {
      if (recurse(neighbour)) return true;
    }
    return false;
  })(start);
}

console.log(hasPathWithDFS(graph, 6, 4));
console.log(hasPathWithBFS(graph, 6, 4));
console.log(recursiveHasPath(graph, 6, 4));
