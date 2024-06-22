function iterativeGCD(n1, n2) {
  let gcd = 1;
  for (let i = 2; i < Math.min(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) gcd = i;
  }
  return gcd;
}

function recursiveGCD(n1, n2) {
  if (n2 === 0) return n1;
  return n1 > n2 ? recursiveGCD(n2, n1 % n2) : recursiveGCD(n1, n2 % n1);
}

console.log(iterativeGCD(42, 56));
console.log(recursiveGCD(42, 56));
