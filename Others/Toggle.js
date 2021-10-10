function toggle(...values) {
  let index = 0;
  return function () {
    if (index === values.length) {
      index = 0;
    }
    return values[index++];
  };
}

const onOff = toggle("on", "off");

console.log(onOff());
console.log(onOff());
console.log(onOff());
console.log(onOff());
