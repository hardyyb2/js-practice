function flat(arr, depth = 1) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      result.push(...flat(arr[i], depth - 1));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

const arr = [1, [2, 3, 4], [[[[[2]]]]]];

console.log(flat(arr, Infinity));
