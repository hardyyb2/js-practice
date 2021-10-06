Number.prototype.customIsNaN = function (input) {
  return typeof input === "number" && input !== input;
};

console.log(new Number().customIsNaN(parseInt("falseś")));
