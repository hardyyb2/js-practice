function memoize(fn) {
  const map = new Map();

  return function () {
    const key = JSON.stringify(arguments);

    if (map.has(key)) {
      return map.get(key);
    } else {
      map.set(key, fn(...arguments));
      return map.get(key);
    }
  };
}

const a = memoize(function fact(value) {
  return value > 1 ? fact(value - 1) * value : 1;
});

console.time();
console.log(a(100));
console.timeEnd();

console.time();
console.log(a(100));
console.timeEnd();

console.time();
console.log(a(100));
console.timeEnd();
