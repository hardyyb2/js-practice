Array.prototype.customFind = function (callback) {
  let result;

  for (let i = 0; i < this.length; i++) {
    let value = callback(this[i], i, this);
    if (value) {
      result = this[i];
      break;
    }
  }

  return result;
};

let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.customFind((item) => item % 2 === 0));
