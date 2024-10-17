// Find min and max elements

const Queue = require('./Queue')

function findMinMax(queue) {
  let tempQueue = new Queue()
  let min = queue.peek()
  let max = queue.peek()

  while(!queue.isEmpty()) {
    let curr = queue.dequeue()
    if (curr < min) {
      min = curr
    } else if (curr > max) {
      max = curr
    }
    tempQueue.enqueue(curr)
  }

  while(!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue())
  }

  return { min, max }
}

const numbers = new Queue()
numbers.enqueue(5)
numbers.enqueue(10)
numbers.enqueue(3)
numbers.enqueue(24)
numbers.enqueue(18)

console.log(numbers.printQueue())
const result = findMinMax(numbers)
console.log(`Min: ${result.min}, Max: ${result.max}`)