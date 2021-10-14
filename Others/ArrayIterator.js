const arrayIterator = (array) => {
  let index = 0;

  return {
    next: function () {
      if (index < array.length) {
        return {
          value: array[index++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};

let a = arrayIterator([1, 2, 4, 4, 56, 7]);

console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
