function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      func(...args);
    }, timeout);
  };
}

function hello(name, surname) {
  console.log("My " + name + surname);
}

const debouncedFunction = debounce(() => hello("Hello", "Yello"), 600);
