// Clear the queue

const Queue = require('./Queue')

function removeElements(queue) {
  while(!queue.isEmpty()) {
    queue.dequeue()
  }
}

const fruits = new Queue()
fruits.enqueue('apple')
fruits.enqueue('mango')
fruits.enqueue('orange')

console.log('Before:', fruits.printQueue())
removeElements(fruits)
console.log('After:', fruits.printQueue())