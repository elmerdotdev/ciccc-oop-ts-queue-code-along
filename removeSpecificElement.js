// Remove specific element

const Queue = require('./Queue')

function removeSpecificElement(queue, target) {
  const tempQueue = new Queue()

  while(!queue.isEmpty()) {
    let curr = queue.dequeue()
    if (curr !== target) {
      tempQueue.enqueue(curr)
    }
  }

  while(!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue())
  }
}

const staff = new Queue()
staff.enqueue("John")
staff.enqueue("Joe")
staff.enqueue("Jack")
staff.enqueue("Jill")

console.log(staff.printQueue())
removeSpecificElement(staff, "Jack")
console.log('--------------')
console.log(staff.printQueue())