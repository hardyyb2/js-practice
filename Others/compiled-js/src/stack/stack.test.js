class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    if (this.top === -1) return undefined;

    return this.items[this.top];
  }

  push(item) {
    this.items[++this.top] = item;
  }

  pop() {
    if (this.top === -1) return;

    delete this.items[this.top--];
  }
}

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("should create an empty stack", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("should push an element to top", () => {
    stack.push(4);
    expect(stack.peek).toBe(4);
    expect(stack.top).toBe(0);
  });

  it("should pop the element from top", () => {
    stack.push(9);
    expect(stack.peek).toBe(9);
    expect(stack.top).toBe(0);

    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
});
