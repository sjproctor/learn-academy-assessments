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
var vowelTester2 = "throw"
// Expected output: 3

const vowelIndex = (string) => {
  let vowels = [
    string.indexOf("a"),
    string.indexOf("e"),
    string.indexOf("i"),
    string.indexOf("o"),
    string.indexOf("u")
  ]
  let idAllVowels = vowels.filter(vowel => vowel !== -1 )
  return idAllVowels.sort()[0]
}
console.log(vowelIndex(vowelTester1))
console.log(vowelIndex(vowelTester2))



// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

const calculator = (num1, operator, num2) => {
  if(num2 === 0){
    return "Can't divide by 0!"
  } else if(operator === "+"){
    return num1 + num2
  } else if(operator === "-"){
    return num1 - num2
  } else if(operator === "*"){
    return num1 * num2
  } else if(operator === "/"){
    return num1 / num2
  }
}

// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
