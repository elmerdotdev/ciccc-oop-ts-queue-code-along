// Check if element exists

const Queue = require('./Queue')

function checkGuestList(queue, target) {
  let tempQueue = new Queue()
  let found = false // flag

  while(!queue.isEmpty()) {
    let curr = queue.dequeue()
    if (curr === target) {
      found = true
    }
    tempQueue.enqueue(curr)
  }

  while(!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue())
  }

  return found
}

const guests = new Queue()
guests.enqueue("John")
guests.enqueue("Jack")
guests.enqueue("Jane")

console.log(guests.printQueue())
let found = checkGuestList(guests, "Joe")
console.log(found)