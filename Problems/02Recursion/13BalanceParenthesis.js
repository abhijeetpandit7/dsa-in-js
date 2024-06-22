function iterativeBalanceParenthesis(arr) {
  let ctr = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === "(") ctr++;
    else if (!ctr--) return false;
  }
  return ctr === 0;
}

function recursiveBalanceParenthesis(arr) {
  const len = arr.length;
  let ctr = 0;
  return (function recurse(index) {
    if (index === len) return ctr === 0;
    if (arr[index] === "(") ctr++;
    else if (!ctr--) return false;
    return recurse(index + 1);
  })(0);
}

function recursiveBalanceParenthesis1(arr) {
  const pairs = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const len = arr.length,
    stack = [];
  return (function recurse(index) {
    if (index === len) return stack.length === 0;
    const char = arr[index];
    if (Object.keys(pairs).includes(char)) stack.push(char);
    else if (pairs[stack.pop()] !== char) return false;
    return recurse(index + 1);
  })(0);
}

console.log(iterativeBalanceParenthesis(["(", "(", ")", ")", "(", ")"]));
console.log(recursiveBalanceParenthesis(["(", "(", ")", ")", "(", ")"]));
console.log(recursiveBalanceParenthesis1(["{", "(", ")", "}", "[", "]"]));
