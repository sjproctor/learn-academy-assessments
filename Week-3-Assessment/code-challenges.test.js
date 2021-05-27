// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// Fibonacci sequence is a series of numbers defined by an Italian mathematician named Leonardo of Pisa in 1202. The Fibonacci sequence can also be converted to the Golden Ratio which is found represented in Eucidian Geometry, Biology, Natural Sciences, as well as music and achitecture and is represented by the Greek letter phi (fi)
// Each number is represented by n + n-1

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacci", () => {
  test("returns an array of that length containing the numbers of the Fibonacci", () => {
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// b) Create the function that makes the test pass.

const fibonacci = (num) => {
  let fibArray = [1, 1]
  for(let i=1; i<num-1; i++){
    fibArray.push(fibArray[i]+fibArray[i-1])
  }
  return fibArray
}


// --bonus: recursion--

// Recursion is a buzz word in programming. If you can drop it in an interview, even if you don't necessarily know how you would implement it, you will sound more advanced just by dropping the word.

// Recursion is a function that calls itself until a condition is met. It is basically like putting the who's on first skit into your code.

// Recursion creates a series of function call that get added to the call stack - so we get a function call for each number starting with 10, the reducing the number by one until we get to one which meets the condition for the if statement to run ending the creation of the function calls. Then the function calls can all execute.

// So after the recursion has finished, we are left with the return [1, 1] from the if statement and a bunch of functions to execute.

// const getFibRecursion = (num) => {
//   if(num === 1){
//     return [1, 1]
//   } else {
//     let fibArray = getFibRecursion(num - 1)
//   console.log("num", num)
//   console.log(fibArray)
//   return [...fibArray, fibArray[num-1] + fibArray[num-2]]
//   }
// }
// console.log(getFibRecursion(10))


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// The JavaScript method .sort() converts all the items into strings, sorts items in ascending order, sorted by the UTF (unicode transformation format) - which is the order in which the values occur when translated to bytes. To use sort in the way we need it to work in this example, we can pass it a comparison function.

describe("sortedOdds", () => {
  test("returns a new array of only odd numbers sorted from least to greatest", () => {
    var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    // Expected output: [-9, 7, 9, 199]
    expect(sortedOdds(fullArr1)).toEqual([-9, 7, 9, 199])
    var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    // Expected output: [-823, 7, 23]
    expect(sortedOdds(fullArr2)).toEqual([-823, 7, 23])
  })
})

// note that the numbers are sorted by their first character and the boolean values are alphabetized along with the strings
// console.log(fullArr1.sort())

// If the value of (a - b) returns a value less than 0, it will sort a to an index lower than b. If it returns a value greater than 0, sort b to an index lower than a.

const sortedOdds = (array) => {
  let oddsAndNumbers = array.filter(value => {
    return value % 2 !== 0 && typeof value === "number"
  })
  return oddsAndNumbers.sort((apple, banana) => apple - banana)
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accSum", () => {
  test("returns an array of the accumulating sum", () => {
    var numbersToAdd1 = [2, 4, 45, 9]
    // Excpected output: [2, 6, 51, 60]
    expect(accSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    var numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]
    expect(accSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    var numbersToAdd3 = []
    // Expected output: []
    expect(accSum(numbersToAdd3)).toEqual([])
  })
})

const accSum = (array) => {
  let runningTotal = 0
  return array.map(value => {
    return runningTotal+=value
  })
}
