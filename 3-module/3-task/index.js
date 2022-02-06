function camelize(str) {
  return str.replace(/-(\b[a-z])/g, (s, founded) => founded.toUpperCase());
}
