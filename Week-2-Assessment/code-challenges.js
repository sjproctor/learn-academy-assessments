// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

const divisibleBy3 = (number) => {
  if(number % 3 === 0){
    return `${number} is divisble by three`
  } else {
    return `${number} is not divisible by three`
  }
}
console.log(divisibleBy3(num1))
console.log(divisibleBy3(num2))
console.log(divisibleBy3(num3))

// --OR--

const divisibleBy3Ternary = (number) => {
  return number % 3 === 0 ? `${number} is divisble by three` : `${number} is not divisible by three`
}
console.log(divisibleBy3Ternary(num1))
console.log(divisibleBy3Ternary(num2))
console.log(divisibleBy3Ternary(num3))



// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const capitalizer = (array) => {
  return array.map(noun => noun[0].toUpperCase() + noun.substring(1))
}
console.log(capitalizer(randomNouns))



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

const sorter = (array) => {
  return array.filter(value => typeof value === "number").sort((a, b) => a - b)
}
console.log(sorter(mixedDataArray))



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// Use the test variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2

const vowelIndex = (string) => {
  let vowels = string.split("").filter(value => {
    let letter = value.toLowerCase()
    return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'
  })
  return string.indexOf(vowels[0])
}
console.log(vowelIndex(vowelTester1))
console.log(vowelIndex(vowelTester2))
console.log(vowelIndex(vowelTester3))



// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

const calculator = (num1, operator, num2) => {
  if(operator === "+"){
    return num1 + num2
  } else if(operator === "-"){
    return num1 - num2
  } else if(operator === "*"){
    return num1 * num2
  } else if(operator === "/" && num2 === 0){
    return "Can't divide by 0!"
  } else if(operator === "/"){
    return num1 / num2
  }
}

// Uncomment and use the following console logs to test your function
console.log(calculator(24000, "+", 601))
// Expected output: 24601

console.log(calculator(6, "*", 7))
// Expected output: 42

console.log(calculator(30, "-", 3))
// Expected output: 27

console.log(calculator(2850, "/", 3))
// Expected output: 950

console.log(calculator(101, "/", 0))
// Expected output: "Can't divide by 0!"
