// Get ticket sales

const Queue = require('./Queue')

function getTicketSales(queue) {
  let tempQueue = new Queue()
  let total = 0
  let noOfTickets = {}

  while(!queue.isEmpty()) {
    let curr = queue.dequeue()
    total += curr.price
    if (noOfTickets[curr.movie] === undefined) {
      noOfTickets[curr.movie] = 1
    } else {
      noOfTickets[curr.movie] = noOfTickets[curr.movie] + 1
    }
    tempQueue.enqueue(curr)
  }

  while(!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue())
  }

  return { noOfTickets, total }
}

const tickets = new Queue()
tickets.enqueue({ movie: 'Smile 2', price: 15 })
tickets.enqueue({ movie: 'Wild Robot', price: 15 })
tickets.enqueue({ movie: 'Transformers One', price: 15 })
tickets.enqueue({ movie: 'Wild Robot', price: 15 })
tickets.enqueue({ movie: 'Smile 2', price: 15 })
tickets.enqueue({ movie: 'Wild Robot', price: 15 })

console.log(tickets.printQueueObjects())
const result = getTicketSales(tickets)
console.log(result.noOfTickets, result.total)