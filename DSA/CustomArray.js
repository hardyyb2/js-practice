class CustomArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(...items) {
    for (let i = 0; i < items.length; i++) {
      this.data[this.length++] = items[i];
    }
  }

  pop() {
    if (this.length > 0) {
      delete this.data[this.length - 1];
      this.length--;
    }
  }

  delete(index) {
    let i;
    for (i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[--this.length];
  }

  unshift(item) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = item;
    this.length++;
  }

  shift() {
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[--this.length];
  }

  get(index) {
    return this.data[index];
  }
}

const arr = new CustomArray();

arr.push(5, 6, 7, 8, 9, 10);
arr.shift();
console.log(arr);
