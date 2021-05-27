// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

const checkTemp = (number) => {
  if(number > 212) {
    return `${number} is above boiling point`
  } else if(number < 212) {
    return `${number} is below boiling point`
  } else if(number === 212) {
    return "212 is at boiling point"
  }
}

console.log(checkTemp(temp1))
console.log(checkTemp(temp2))
console.log(checkTemp(temp3))


// --------------------2) Create a function that takes in an array of numbers and returns an array with each number multiplied by 5.
// Use the test variable provided below. Expected output: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

const mult5 = (array) => {
  let newArray = []
  for(let i=0; i<array.length; i++){
    newArray.push(array[i] * 5)
  }
  return newArray
}

console.log(mult5(myNumbers1))

// --------------------3) Create a function that takes in an array of numbers and returns an array containing only the odd numbers.
// Use the test variable provided below. Expected output: [-7, 9, 13]

var myNumbers2 = [8, -7, 0, 6, 2, 9, 13]

const giveOdds = (nums) => {
  let oddNums = []
  for(let i=0; i<nums.length; i++){
    if(nums[i] % 2 !== 0) {
      oddNums.push(nums[i])
    }
  }
  return oddNums
}
console.log(giveOdds(myNumbers2))

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// Option 1:
const removeVowels = (string) => {
  let consonants = ""
  for(let i=0; i<string.length; i++){
    let lowerCaseChar = string[i].toLowerCase()
    if(lowerCaseChar !== "a" && lowerCaseChar !== "e" && lowerCaseChar !== "i" && lowerCaseChar !== "o" && lowerCaseChar !== "u") {
      consonants += string[i]
    }
  }
  return consonants
}

console.log(removeVowels(stringWithVowels1))
console.log(removeVowels(stringWithVowels2))

// Options 2:
const vowelKicker = (string) => {
  let array = string.split("").filter(value => {
    let v = value.toLowerCase()
    return v !== "a" && v !== "e" && v !== "i" && v !== "o" && v !== "u"
  })
  return array.join("")
}
console.log(vowelKicker(stringWithVowels1))
console.log(vowelKicker(stringWithVowels2))


// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user if the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"
// Hint: There is an operator in JavaScript called typeof :)

var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"

const removeVowelsPlus = (string) => {
  let consonants = ""
  if(typeof string === "string") {
    for(let i=0; i<string.length; i++){
      let lowerCaseChar = string[i].toLowerCase()
      if(lowerCaseChar !== "a" && lowerCaseChar !== "e" && lowerCaseChar !== "i" && lowerCaseChar !== "o" && lowerCaseChar !== "u") {
        consonants += string[i]
      }
    }
  } else {
    return `${string} is not a string`
  }
  return consonants
}

console.log(removeVowelsPlus(refactorTester1))
console.log(removeVowelsPlus(refactorTester2))
console.log(removeVowelsPlus(refactorTester3))
