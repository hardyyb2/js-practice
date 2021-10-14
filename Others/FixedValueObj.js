const obj = {
  _a: 29,

  set a(value) {
    if (value < 0) {
      throw new Error("Cannot be less than 0");
    }
    this._a = value;
  },

  get a() {
    return this._a;
  },
};

obj.a = -23;

console.log(obj.a);
