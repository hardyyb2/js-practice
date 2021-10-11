Array.prototype.customReduce = function (callback, initial) {
  if (!typeof callback === "function") {
    throw new Error("Callback should be a function");
  }

  let accumulator = initial ?? this[0];

  for (let i = 0; i < this.length; i++) {
    if (i === 0 && initial === undefined) continue;

    let val = callback(accumulator, this[i], i, this);
    accumulator = val;
  }

  return accumulator;
};

let arr = [1, 2, 3, 4, 5, 6];

let sum = arr.customReduce((accu, item) => accu + item);

console.log(sum);
