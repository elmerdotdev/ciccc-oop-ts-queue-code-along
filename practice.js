// FIFO

const numbers = []
const tempQueue = []

numbers.push(5)
numbers.push(4)
numbers.push(2)
numbers.push(1)

console.log('Before:', numbers)

while(numbers.length !== 0) {
  let curr = numbers.shift()
  if (curr !== 4) {
    tempQueue.push(curr)
  }
}

while(tempQueue.length !== 0) {
  numbers.push(tempQueue.shift())
}

console.log('After:', numbers)


const students = []
const tempStudentQueue = []
students.push({ fullname: "John Smith", grade: 100 })
students.push({ fullname: "Jane Doe", grade: 95 })
students.push({ fullname: "Joe Bro", grade: 73 })
students.push({ fullname: "Jill Mill", grade: 84 })

console.log(students)

while(students.length !== 0) {
  let curr = students.shift() // John Smith
  if (curr.grade >= 75) {
    tempStudentQueue.push(curr)
  }
}

while(tempStudentQueue.length !== 0) {
  students.push(tempStudentQueue.shift())
}

console.log(students)
