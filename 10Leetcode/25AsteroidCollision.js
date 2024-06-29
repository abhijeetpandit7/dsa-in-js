// leetcode.com/problems/asteroid-collision
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
  const stack = [];
  for (const ele of asteroids) {
    let flag = true;
    while (stack.length && ele < 0 && stack.at(-1) > 0) {
      const stackTop = stack.at(-1);
      if (-ele > stackTop) stack.pop();
      if (-ele == stackTop) {
        stack.pop();
        flag = false;
        break;
      } else if (-ele < stackTop) {
        flag = false;
        break;
      }
    }
    if (flag) stack.push(ele);
  }
  return stack;
}

module.exports = { asteroidCollision };
