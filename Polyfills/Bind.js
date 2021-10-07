Function.prototype.customBind = function (obj, ...args) {
  let func = this;

  return function (...newArgs) {
    func.apply(obj, [...args, ...newArgs]);
  };
};

const obj = {
  name: "Hardik",
};

const printName = function () {
  console.log(this.name);
  return this.name;
};

let newFunc = printName.customBind(obj);
newFunc();
