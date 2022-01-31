function sumSalary(salaries) {
  let result = 0;

  for (let v of Object.values(salaries)) {
    if (!isNaN(v) && isFinite(v) && typeof v === "number") {
      result += v;
    }
  }

  return result;
}
