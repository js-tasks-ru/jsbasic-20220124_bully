function getMinMax(str) {
  const numArr = Array.from(str.split(" "))
    .map(Number)
    .filter(Number)
    .sort((a, b) => a - b);

  return {min: numArr[0], max: numArr[numArr.length - 1]};
}
