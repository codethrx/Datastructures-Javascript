// class Queue {
//   constructor() {
//     this.entities = [];
//   }
//   enqueue(...item) {
//     this.entities.push(...item);
//   }
//   dequeue() {
//     return this.entities.length >= 1
//       ? this.entities.shift()
//       : "Stack is empty right now";
//   }
//   print() {
//     console.log(
//       this.entities.length >= 1
//         ? `Values=>${this.entities.toString()}`
//         : "Stack is empty right now..."
//     );
//   }
// }
// const queue = new Queue();
// queue.enqueue(1, 2, 2, 3, 4, 5, 6);
// queue.print();
// queue.dequeue();
// queue.dequeue();
// queue.print();
// class Queue {
//   constructor() {
//     this.state = {};
//     this.rear = 0;
//     this.front = 0;
//   }
//   enqueue(val) {
//     this.state[this.rear] = val;
//     this.rear++;
//   }
//   dequeue() {
//     const value = this.state[this.front];
//     delete this.state[this.front];
//     this.front++;
//     return value;
//   }
//   print() {
//     console.log(this.state);
//   }
// }
// const queue = new Queue();
// queue.print();
// queue.enqueue(1);
// queue.enqueue(12);
// queue.enqueue(12);
// queue.print();
// console.log(queue.dequeue());
// queue.print();
// console.log(queue.dequeue());
// queue.print();

//Circular Queue
