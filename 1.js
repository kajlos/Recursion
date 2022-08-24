function collatz(n, steps = 0) {
  if (n === 1) return steps;
  else if (n % 2 === 0) {
    steps++;
    return collatz(n / 2, steps);
  } else if (n % 2 !== 0) {
    steps++;
    return collatz(3 * n + 1, steps);
  }
}
// console.log(collatz(27));

function sumRange(n) {
  if (n === 1) return 1;
  else return n + sumRange(n - 1);
}
// console.log(sumRange(3));
function power(x, n) {
  if (n === 1) return x;
  else return x * power(x, n - 1);
}
// console.log(power(2, 4));
function fact(n) {
  if (n === 1) return 1;
  else return n * fact(n - 1);
}
// console.log(fact(5));
