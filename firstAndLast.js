// Get the first and last element in your queue
// FIFO

const Queue = require('./Queue')

function getFirstAndLast(queueEmp) {
  let tempQueue = new Queue()
  let index = 0 // flag counter
  let totalItems = queueEmp.size()
  let first;
  let last;

  while(!queueEmp.isEmpty()) {
    let curr = queueEmp.dequeue()
    if (index === 0) {
      first = curr
    } else if (index === totalItems - 1) {
      last = curr
    } else {
      tempQueue.enqueue(curr)
    }
    index++
  }

  while(!tempQueue.isEmpty()) {
    queueEmp.enqueue(tempQueue.dequeue())
  }

  return { first, last }
}

const employees = new Queue()
employees.enqueue("John Smith")
employees.enqueue("Joe Doe")
employees.enqueue("Jane Moe")
employees.enqueue("Jill Mill")

console.log(employees)

const result = getFirstAndLast(employees)

console.log(employees)
console.log(`First: ${result.first}, Last: ${result.last}`)