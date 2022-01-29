function checkSpam(str) {
  let formatInputString = str.toLowerCase();

  return str ? formatInputString.includes('1xbet') || formatInputString.includes('xxx') : false;
}
