function getMinCoins(amount, denominations) {
  const impossibles = {};
  const [result, step] = (function recurse(amount, step) {
    denominations.sort((a, b) => b - a);
    let result = amount === 0,
      temp = step;
    for (let i = 0; i < denominations.length && result === false; i++) {
      const diff = amount - denominations[i];
      if (diff >= 0 && !impossibles[diff]) {
        [result, step] = recurse(diff, temp + 1);
      }
    }
    if (!result) impossibles[amount] = true;
    return [result, step];
  })(amount, 0);
  return result && step;
}

function getMinCoins1(amount, coins, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount < 0) return -1;
  if (amount === 0) return 0;

  let minCoinsCount = Number.MAX_SAFE_INTEGER;
  for (const coin of coins) {
    const result = getMinCoins1(amount - coin, coins, memo);
    if (result > -1) {
      minCoinsCount = Math.min(minCoinsCount, result + 1);
    }
  }
  memo[amount] = minCoinsCount === Number.MAX_SAFE_INTEGER ? -1 : minCoinsCount;
  return memo[amount];
}

// console.log(getMinCoins(15, [4, 6, 10]));
// console.log(getMinCoins(8, [5, 12, 4]));
// console.log(getMinCoins(103, [6, 20, 1]));
// console.log(getMinCoins(8, [5, 3, 4]));

console.log(getMinCoins1(15, [4, 6, 10]));
console.log(getMinCoins1(8, [5, 3, 4]));
