/*
  "coin change problem", where you need to determine if it's possible to form a specific amount using any combination of elements from a given set, which can be used an unlimited number of times."

  sumPossible(8, [5, 12, 4]); -> true
  sumPossible(103, [6, 20, 1]); // -> true
  sumPossible(8, [5, 3, 4]) -> true
  sumPossible(15, [4, 6, 10]) -> false
*/

function sumPossible(amount, denominations) {
  denominations.sort((a, b) => b - a);
  const impossibles = {};

  return (function recurse(amount) {
    let result = amount === 0;
    for (let i = 0; i < denominations.length && result === false; i++) {
      const diff = amount - denominations[i];
      if (diff >= 0 && !impossibles[diff]) result = recurse(diff);
    }
    if (!result) impossibles[amount] = true;

    return result;
  })(amount);
}

function sumPossible1(amount, coins, memo = {}) {
  if (amount === 0) return true;
  if (amount < 0) return false;
  if (amount in memo) return memo[amount];
  
  for (const coin of coins) {
    if (sumPossible1(amount - coin, coins, memo)) {
      memo[amount] = true;
      return true;
    }
  }
  memo[amount] = false;
  return false;
}

// console.log(sumPossible(15, [4, 6, 10])); // -> false
// console.log(sumPossible(8, [5, 12, 4])); // -> true
// console.log(sumPossible(103, [6, 20, 1])); // -> true
// console.log(sumPossible(8, [5, 3, 4])); // -> true
console.log(sumPossible1(15, [4, 6, 10])); // -> false
console.log(sumPossible1(8, [5, 12, 4])); // -> true
console.log(sumPossible1(103, [6, 20, 1])); // -> true
console.log(sumPossible1(8, [5, 3, 4])); // -> true
