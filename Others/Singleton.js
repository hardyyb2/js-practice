const Singleton = (function () {
  let instance;

  function createInstance() {
    let obj = { a: "a" };
    return obj;
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1, instance2);
