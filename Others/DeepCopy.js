const deepCopy = (obj) => {
  let clone = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && !Array.isArray(value)) {
      clone[key] = deepCopy(value);
    } else {
      if (Array.isArray(value)) {
        clone[key] = [...value];
      } else {
        clone[key] = value;
      }
    }
  }

  return clone;
};

const a = {
  b: "a",
  c: "d",
  e: "p",
  k: {
    l: {
      m: "n",
    },
    p: "]",
  },
  lk: [1, 2, 4],
};

const b = deepCopy(a);
b.k.l.m = "new value";
b.lk[2] = 99;

console.log(a, b);
