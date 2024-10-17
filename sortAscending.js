// Sort queue in ascending order

const Queue = require('./Queue')

function sortAscending(queue) {
  const tempQueue = new Queue()

  while(!queue.isEmpty()) {
    let currMin = queue.dequeue()

    // Find the lowest number
    for (let i = 0; i < queue.size(); i++) {
      let curr = queue.dequeue()
      if (curr < currMin) {
        queue.enqueue(currMin)
        currMin = curr
      } else {
        queue.enqueue(curr)
      }
    }

    tempQueue.enqueue(currMin)
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
sortAscending(numbers)
console.log("-------")
console.log(numbers.printQueue())