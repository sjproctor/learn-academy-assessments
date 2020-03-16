// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [{name: "ford prefect", occupation: "hitchhiker"}, {name: "zaphod beeblebrox", occupation: "president of the galaxy"}, {name: "arthur dent", occupation: "radio employee"}]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is the president of the galaxy." "Arthus Dent is a radio employee."

const descripts = (array) => {
  let upcase = array.map(value => {
    let eachName = value.name.split(" ")
    return eachName.map(value => value.charAt(0).toUpperCase() + value.substring(1)).join(" ") + ` is a ${value.occupation}.`
  })
  return upcase.join(" ")
}
console.log(descripts(people))


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

const modulo3 = (array) => {
  let numsOnly = array.filter(value => typeof value === "number")
  return numsOnly.map(value => {
    return value%3
  })
}
console.log(modulo3(testingArray1))
console.log(modulo3(testingArray2))



// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

const deDup1 = (arr1, arr2) => {
  let combo = arr1.concat(arr2)
  return combo.filter((value, index) => {
    return combo.indexOf(value) === index
  })
}
console.log(deDup1(testingArray3, testingArray4))
