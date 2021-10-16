Array.prototype.average = function () {
  let total = 0;

  for (let i = 0; i < this.length; i++) {
    total += this[i];
  }

  return total / this.length;
};

const a = [1, 2, 3, 4, 5, 6];

console.log(a.average());
