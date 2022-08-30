class Stack {
  constructor() {
    this.entities = [];
  }
  getValue() {
    return this.entities;
  }
  push(...value) {
    this.entities.push(...value);
  }
  pop() {
    // const value = this.entities[this.entities.length - 1];
    // this.entities.length = this.entities.length - 1;
    // return value;
    return this.entities.pop();
  }
  getPeek() {
    return this.entities[this.entities.length - 1];
  }
  isEmpty() {
    return this.entities.length === 0
      ? `Stack is Empty`
      : `Stack has ${this.entities.length} members.`;
  }
}
const stack = new Stack();
stack.push(100, 101, 102);

console.log(stack.getValue());
console.log("Poppin em up");
console.log(stack.pop());
console.log(stack.getValue());
console.log(`Peek Value is ${stack.getPeek()}`);
console.log(stack.isEmpty());
