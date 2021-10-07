Function.prototype.customApply = function (obj, rest) {
  let func = this;
  func.call(obj, ...rest);
};

const obj = {
  name: "Hardik",
};

const printName = function () {
  console.log(this.name, arguments);
  return this.name;
};

printName.customApply(obj, ["Hey", "Hekki"]);
