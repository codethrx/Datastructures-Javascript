class CircularQueue {
  constructor(capacity) {
    this.values = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }
  print() {
    console.log(this.values);
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  enqueue(item) {
    if (this.isFull()) {
      console.log("Cannot add another elemetn");
      return;
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.values[this.rear] = item;
    this.currentLength += 1;
    if (this.rear === 0) {
      this.front = this.rear;
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log(`Circular Queue is empty cannot dequeu..`);
      this.rear = -1;
      this.front = -1;
      return;
    }
    this.values[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
  }
}
const c = new CircularQueue(5);
c.enqueue(1);
c.enqueue(2);
c.enqueue(3);
c.enqueue(4);
c.enqueue(5);
c.enqueue(5);
c.print();
c.dequeue();
c.dequeue();
c.dequeue();
c.dequeue();
c.dequeue();
c.print();
c.enqueue(1991);
c.enqueue(1992);
c.enqueue(1993);
c.enqueue(1994);
c.enqueue(1995);
c.print();
