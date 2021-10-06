Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

let arr = [1, 2, 3, 4, 5, 6];

arr.customForEach((item, index, arr) => console.log(item, index, arr));
