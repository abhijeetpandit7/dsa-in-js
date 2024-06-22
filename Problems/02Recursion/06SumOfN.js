function iterativeSumOfN(n) {
  let res = 0;
  for (let i = 0; i <= n; i++) {
    res += i;
  }
  return res;
}

function recursiveSumOfN(n) {
  if (n === 1) return 1;
  return n + recursiveSumOfN(n - 1);
}

console.log(iterativeSumOfN(5));
console.log(recursiveSumOfN(5));
