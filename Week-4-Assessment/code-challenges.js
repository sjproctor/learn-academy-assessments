// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

// Math.random() outputs a number between 0 and 1.
// Run Math.random() in console

// sort() will alphabetize strings
// console.log("sort", collections.sort())

// sort is an iterator - it is a method that acts on an array, so it will run as many times as the array is long

// sort can also take an argument of a function
// the function can take two comparison values like a and b

// EXTRA - if asked
// function compare(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1
//   }
//   if (a is greater than b by the ordering criterion) {
//     return 1
//   }
//   // a must be equal to b
//   return 0
// }


// In this case we want it to be sorted in a random order
// So we don't need to pass a comparison, just something that will mix up the array

// So everytime the array runs we will get a number that is positive (if Math.random is bigger than .5) or negative, if it is less than .5


const shuffler = (array) => {
  if(array.length > 0){
    array.shift()
    // return array.sort(() => console.log("here", Math.random() - 0.5))
    return array.sort(() => Math.random() - 0.5)
  } else {
    return "The array is empty."
  }
}
console.log(shuffler(collections))
console.log(shuffler(collections))
console.log(shuffler(collections))
console.log(shuffler([]))

// Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly.


// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

const cubed = (array) => {
  let cubed = array.map(value => value**3)
  // reduce is a higher order function that is called on an array
  // reduce can take four arguments, but the two needed here are accumulator and the currentValue
  // accumulator is equal to the first value in the array
  // the currentValue is whatever value is being processed by the function
  return cubed.reduce((accumulator, value) => accumulator + value)
  // reduce returns a single value
}
console.log(cubed(cubeAndSum1))
console.log(cubed(cubeAndSum2))

// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

const minMax = (array) => {
  let min = array[0]
  let max = array[0]
  array.map(value => {
    if(value < min){
      min = value
    }
  })
  array.map(value => {
    if(value > max){
      max = value
    }
  })
  return [min, max]
}
console.log(minMax(nums1))
console.log(minMax(nums2))

// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

const wonkyLetters = (string) => {
  let lettersArray = string.split("").map((value, index)=> {
    if(index%2 === 1){
      return value.toUpperCase()
    } else {
      return value
    }
  })
  return lettersArray.join("")
}
console.log(wonkyLetters(testString1))
console.log(wonkyLetters(testString2))


// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

const combineWithNoDup = (array1, array2) => {
  let comboArray = array1.concat(array2)
  return comboArray.filter((value, index) => {
    return comboArray.indexOf(value) === index
  })
}
console.log(combineWithNoDup(arr1, arr2))

const combineWithNoDupSpread = (...array) => {
  // returns a 2d array, so we need to flatten it
  // there is a cool method in Ruby called flatten, there might be something like that in JS, but since we are exploring reduce, let's do more of that
  // reduce will act on each item in the array - which is two arrays
  // let comboArray = array.reduce((acc, value) => {
  //   console.log("acc", acc, "value", value)
  //   return acc.concat(value)
  // })
  let comboArray = array.reduce((acc, value) => acc.concat(value))
  return comboArray.filter((value, index) => {
    return comboArray.indexOf(value) === index
  })
}
console.log(combineWithNoDupSpread(arr1, arr2))
// this makes this function way more dynamic, since now we can pass in as many arrays as suits you
console.log(combineWithNoDupSpread(arr1, arr2, [100, 232, 3, 7]))
