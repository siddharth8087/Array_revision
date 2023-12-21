let n = 100;

function fact(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

console.log("Factorial of " + n + ": " + fact(n));
