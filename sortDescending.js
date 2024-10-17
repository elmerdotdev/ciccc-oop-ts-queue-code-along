// Sort queue in descending order

const Queue = require('./Queue')

function sortDescending(queue) {
  const tempQueue = new Queue()

  while(!queue.isEmpty()) {
    let currMax = queue.dequeue()

    // Find the highest number
    for (let i = 0; i < queue.size(); i++) {
      let curr = queue.dequeue()
      if (curr > currMax) {
        queue.enqueue(currMax)
        currMax = curr
      } else {
        queue.enqueue(curr)
      }
    }

    tempQueue.enqueue(currMax)
  }

  while(!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue())
  }
}

const numbers = new Queue()
numbers.enqueue(5)
numbers.enqueue(10)
numbers.enqueue(4)
numbers.enqueue(24)
numbers.enqueue(16)

console.log(numbers.printQueue())
sortDescending(numbers)
console.log("-------")
console.log(numbers.printQueue())