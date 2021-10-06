Array.prototype.customFilter = function (callback) {
  const arr = [];

  for (let i = 0; i < this.length; i++) {
    let value = callback(this[i], i, this);
    if (value) {
      arr.push(this[i]);
    }
  }

  return arr;
};

let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.customFilter((item, index, arr) => item % 2 === 0));
