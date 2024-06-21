function treeSumWithDFT(root) {
  if (!root) return 0;
  return root.key + treeSumWithDFT(root.left) + treeSumWithDFT(root.right);
}

function treeSumWithBFT(root) {
  let value = 0;
  if (!root) return value;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    value += node.key;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return value;
}

module.exports = { treeSumWithDFT, treeSumWithBFT };
