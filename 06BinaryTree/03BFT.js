function breadthFirstTraversal(root) {
  const queue = [root],
    values = [];
  if (!root) return values;
  while (queue.length) {
    const node = queue.shift(); // point of optimization; any algo pace relies of the ds
    values.push(node.key);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return values;
}

module.exports = { breadthFirstTraversal };
