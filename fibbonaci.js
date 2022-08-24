function fibs(n) {
  if (n == 0) return [0];
  if (n == 1) return [1];
  let sum = 0;
  let a = 0;
  let b = 1;
  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    sum = a + b;
    a = b;
    b = sum;
    result.push(sum);
  }
  return result;
}
console.log(fibs(9));

function fibsRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}
console.log(fibsRec(8));
