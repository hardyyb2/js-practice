const flat = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      result.push(...flat(arr[i]));
    }
  }

  return result;
};

const a = [1, [2, 5], [34, 7, [67, 9]]];

console.log(flat(a));
