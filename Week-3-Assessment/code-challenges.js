// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const getFib = (num) => {
  let fibArray = [1, 1]
  for(let i=1; i<num; i++){
    fibArray.push(fibArray[i]+fibArray[i-1])
  }
  return fibArray
}
console.log(getFib(10))

// --bonus: recursion--

const getFibRecursion = (num) => {
	if(num === 1){
		return [1, 1]
	} else {
		let fibArray = getFibRecursion(num - 1)
  	return [...fibArray, fibArray[num-1] + fibArray[num-2]]
	}
}
console.log(getFibRecursion(10))


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const onlyOddsSorted = (array) => {
  return array.filter(value => typeof value === "number" && value%2 !== 0).sort((a, b) => (a - b))
}
console.log(onlyOddsSorted(fullArr1))
console.log(onlyOddsSorted(fullArr2))


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const getMiddle = (string) => {
  if(string.length%2 === 0){
    return string[string.length/2-1] + string[string.length/2]
  } else {
    return string[string.length/2+.5]
  }
}
console.log(getMiddle(middleLetters1))
console.log(getMiddle(middleLetters2))


// --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere{
  constructor(radius){
    this.radius = radius
  }
  getArea(){
    return 4 * Math.PI * this.radius ** 2
  }
}
const sphere1 = new Sphere(3)
console.log(sphere1.getArea())
const sphere2 = new Sphere(4)
console.log(sphere2.getArea())
const sphere3 = new Sphere(5)
console.log(sphere3.getArea())



// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const addEmUp = (array) => {
  let runningTotal = 0
  return array.map(value => {
    return runningTotal+=value
  })
}
console.log(addEmUp(numbersToAdd1))
console.log(addEmUp(numbersToAdd2))
console.log(addEmUp(numbersToAdd3))
