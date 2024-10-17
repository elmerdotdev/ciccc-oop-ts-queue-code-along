class Queue {
  constructor() {
    this.items = []
  }

  enqueue(item) {
    this.items.push(item)
  }

  dequeue() {
    return this.items.shift()
  }

  peek() {
    return this.items[0]
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return this.size() === 0;
  }

  printQueue() {
    return this.items.join('\r\n')
  }

  printQueueObjects() {
    return this.items.map(item => JSON.stringify(item)).join('\r\n')
  }
}

module.exports = Queue