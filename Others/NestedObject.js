const printNestedObj = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && !Array.isArray(obj)) {
      printNestedObj(value);
    } else {
      console.log(`key : ${key}, value : ${value} \n`);
    }
  }
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

printNestedObj(a);
