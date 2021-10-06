Array.prototype.customMap = function (callback) {
  const arr = [];

  for (let i = 0; i < this.length; i++) {
    let value = callback(this[i], i, this);
    arr.push(value);
  }

  return arr;
};

let arr = [1, 2, 3, 4, 5, 6];

arr.customMap((item, index, arr) => console.log(item, index, arr));
