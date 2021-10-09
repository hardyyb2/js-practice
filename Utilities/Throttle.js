function throttle(func, wait) {
  let timer;
  return (...args) => {
    if (timer) return;

    timer = setTimeout(() => {
      func(...args);
      timer = null;
    }, wait);
  };
}

function hello(name, surname) {
  console.log("My " + name + surname);
}

const throttledHello = throttle(hello, 300);
throttledHello("Hardik", "Badola");
