// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

// Option 1:
describe("shuffler", () => {
  var colors1 = ["purple", "blue", "green", "yellow", "pink"]
  // Pass in the exact input, but the output is unknown, so have to remove the first item from the array, pass in all the additional values, then sort the outcome so that it can be compared to any given output
  var output1 = [...colors1.slice(1)].sort()
  var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
  var output2 = [...colors2.slice(1)].sort()

  test("returns a shortened and shuffled array", () => {
    expect(shuffler(colors1).sort()).toEqual(output1)
    expect(shuffler(colors2).sort()).toEqual(output2)
  })
})

// Option 2:
describe("shuffler", () => {
  var colors1 = ["purple", "blue", "green", "yellow", "pink"]
  var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
  it("removes the first item from the array and shuffles the remaining content", () => {
    expect(shuffler(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
    expect(shuffler(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))
  })
})

// Jest matcher: https://jest-bot.github.io/jest/docs/expect.html#expectarraycontainingarray
// Stack overflow iwth two options: https://stackoverflow.com/questions/32103252/expect-arrays-to-be-equal-ignoring-order

// b) Create the function that makes the test pass.

const shuffler = (array) => {
  return array.slice(1).sort(() => Math.random() - 0.5)
}

// Math.random() outputs a number between 0 and 1.
// Run Math.random() in console

// sort() will alphabetize strings
// console.log("sort", collections.sort())

// sort is an iterator - it is a method that acts on an array, so it will run as many times as the array is long

// sort can also take an argument of a function
// the function can take two comparison values like a and b

// EXTRA:
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


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("miniMax", () => {
  var nums1 = [3, 56, 90, -8, 0, 23, 6]
  // Expected output: [-8, 90]
  var nums2 = [109, 5, 9, -59, 8, 24]
  // Expected output: [-59, 109]

  test("returns an array of the minimum and maximum numbers in that order", () => {
    expect(miniMax(nums1)).toEqual([-8, 90])
    expect(miniMax(nums2)).toEqual([-59, 109])
  })
})

// b) Create the function that makes the test pass.

// Option 1:
// const miniMax = (array) => {
//   array.sort((a, b) => a - b)
//   return [array[0], array[array.length - 1]]
// }

// Option 2:
const miniMax = (array) => {
  return [Math.min(...array), Math.max(...array)]
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("combineWithNoDup", () => {
  test("returns one array with no duplicate values", () => {
  var testArray1 = [3, 7, 10, 5, 4, 3, 3]
  var testArray2 = [7, 8, 2, 3, 1, 5, 4]
  // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

    expect(combineWithNoDup(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

// b) Create the function that makes the test pass.

// const combineWithNoDup = (array1, array2) => {
//   let comboArray = array1.concat(array2)
//   return comboArray.filter((value, index) => {
//     return comboArray.indexOf(value) === index
//   })
// }

// STRETCH
const combineWithNoDup = (...array) => {
  // returns a 2d array, so we need to flatten it, can use reduce
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

// Option2:
// const combineWithNoDup = (...arrays) => {
//   const merged = [].concat(...arrays)
//   return merged.filter((value, index, array) => array.indexOf(value) === index)
// }

// Option3:
// const combineWithNoDup = (...arrays) => {
//   return arrays.flat().filter((value, index, array) => array.indexOf(value) === index)
// }
