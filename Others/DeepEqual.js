const deepEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    const areObjects =
      typeof val1 === "object" &&
      typeof val2 === "object" &&
      val1 !== null &&
      val2 !== null;

    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
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

const b = {
  b: "a",
  c: "d",
  e: "p",
  k: {
    l: {
      m: "n",
    },
    p: "]",
  },
  lk: [2, 2, 4],
};

console.log(deepEqual(a, b));
