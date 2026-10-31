const symbols = [2];

function isSymmetric(symbols) {
  const res = [];
  for (let s = 0; s < symbols.length / 2; s++) {
    res.push(symbols[s] == symbols[symbols.length - s - 1]);
  }
  return res.every((r) => r == true);
}
console.log(isSymmetric(symbols));
