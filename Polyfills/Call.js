Function.prototype.customCall = function (obj, ...rest) {
  let func = this;
  func.apply(obj, [...rest]);
};

const obj = {
  name: "Hardik",
};

const printName = function () {
  console.log(this.name, arguments);
  return this.name;
};

printName.customCall(obj, "Hey", "Hekki");
