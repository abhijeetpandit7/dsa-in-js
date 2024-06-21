function depthFirstTraversal(root) {
  const stack = [root],
    values = [];
  if (!root) return values;
  while (stack.length) {
    const node = stack.pop();
    values.push(node.key);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return values;
}

function recursiveDepthFirstTraversal(root) {
  if (!root) return [];
  return [
    root.key,
    ...recursiveDepthFirstTraversal(root.left),
    ...recursiveDepthFirstTraversal(root.right),
  ];
}

module.exports = { depthFirstTraversal, recursiveDepthFirstTraversal };
