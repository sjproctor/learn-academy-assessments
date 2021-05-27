// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2021"
// console.log(cohort.length)

// a) Your answer:
// b) Verify and explain: 10 is the length, 0-9 indexes, the last index of any string/array is .length - 1


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer:
// b) Verify and explain: second l, strings are 0 indexed


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])
// console.log(languages[1])

// a) Your answer:
// b) Verify and explain: "Ruby", the variable index is holding the number 1


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())
// console.log(weekendDays[0].toUpperCase())
// console.log(weekendDays[1].toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: is not a function - means what you are calling your method on is not the correct data type or is not defined by your program


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length) // "number"
console.log(typeof 7) // "number"
console.log(typeof true) // "boolean"
console.log(typeof "hello") // "string"

// a) Your answer: array?? 3?
// b) Verify and explain: "number" because typeof returns the name of the data type it gets passed
