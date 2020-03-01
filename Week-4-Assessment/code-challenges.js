// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

const shuffler = (array) => {
  array.shift()
  return array.sort(() => Math.random() - 0.5)
}
console.log(shuffler(collections))
console.log(shuffler(collections))
console.log(shuffler(collections))

// Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly.


// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

const cubed = (array) => {
  let cubed = array.map(value => value**3)
  let total = 0
  cubed.map(value => total += value)
  return total
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
