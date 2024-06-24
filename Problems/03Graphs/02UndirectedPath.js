const edges = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

/*
  const graph = {
    b: [a],
    a: [b]
  }

  loop => check if DOES NOT exist, then add key => push both nodes

  Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes.

  After that you can find and node path etc.
  Take care of cycle via visited technique.
*/

function createGraph(edges) {
  const map = {};
  function addElement(key, val) {
    if (map[key] && val) map[key].push(val);
    else if (key && val) map[key] = [val];
    else if (key) map[key] = [];
  }
  for (const [m, n] of edges) {
    addElement(m, n);
    addElement(n, m);
  }
  return map;
}

// console.log(createGraph(edges));

module.exports = { createGraph };
