function factorial(n) {
  let result = 1;

  for (let i = n; i > 1; i--) {
    result *= n--;
  }

  return result;
}
