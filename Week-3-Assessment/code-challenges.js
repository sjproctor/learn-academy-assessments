// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Fibonacci sequence is a series of numbers defined by an Italian mathematician named Leonardo of Pisa in 1202. The Fibonacci sequence can also be converted to the Golden Ratio which is found represented in Eucidian Geometry, Biology, Natural Sciences, as well as music and achitecture and is represented by the Greek letter phi (fi)
// Each number is represented by n + n-1

const getFib = (num) => {
  let fibArray = [1, 1]
  for(let i=1; i<num-1; i++){
    fibArray.push(fibArray[i]+fibArray[i-1])
  }
  return fibArray
}
console.log(getFib(10))


// --bonus: recursion--

// Recursion is a buzz word in programming. If you can drop it in an interview, even if you don't necessarily know how you would implement it, you will sound more advanced just by dropping the word.

// Recursion is a function that calls itself until a condition is met. It is basically like putting the who's on first skit into your code.

// Recursion creates a series of function call that get added to the call stack - so we get a function call for each number starting with 10, the reducing the number by one until we get to one which meets the condition for the if statement to run ending the creation of the function calls. Then the function calls can all execute.

// So after the recursion has finished, we are left with the return [1, 1] from the if statement and a bunch of functions to execute.

const getFibRecursion = (num) => {
	if(num === 1){
		return [1, 1]
	} else {
		let fibArray = getFibRecursion(num - 1)
    console.log("num", num)
    console.log(fibArray)
  	return [...fibArray, fibArray[num-1] + fibArray[num-2]]
	}
}
console.log(getFibRecursion(10))


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// The JavaScript method .sort() converts all the items into strings, sorts items in ascending order, sorted by the UTF (unicode transformation format) - which is the order in which the values occur when translated to bytes. To use sort in the way we need it to work in this example, we can pass it a comparison function.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// note that the numbers are sorted by their first character and the boolean values are alphabetized along with the strings
console.log(fullArr1.sort())

// If the value of (a - b) returns a value less than 0, it will sort a to an index lower than b. If it returns a value greater than 0, sort b to an index lower than a.

const onlyOddsSorted = (array) => {
  let filtered = array.filter(value => typeof value === "number" && value%2 !== 0)
  return filtered.sort((a, b) => (b - a))
}
console.log(onlyOddsSorted(fullArr1))
console.log(onlyOddsSorted(fullArr2))

// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

// Approach: I am first interested in determining the length of the string. Because then there will be two different actions taken depending on whether the string is an even number of characters or an odd number of characters. And there is really only the option that the string is even numbers or odd numbers.

// Then, I just want to get the middle values. So if the string is even, I need two characters. Rhinoceros is 10 letters long, so if I divide the length by two I get 5. And the 5th index is the second of the two index that I need. The other one is going to be the one just before that - or the length, divided by two, minus one.

// For the odd numbers, the string hello is 5 letters, so I need to get the length divided by two that will give me 2.5, and I will always get a .5 from an odd number divided by two. So with that, the index of 2.5 is .5 higher than what I need. So, I can subtract .5 and get the middle index.

const getMiddle = (string) => {
  let mid = string.length / 2
  if(string.length%2 === 0){
    return string[mid - 1] + string[mid]
  } else {
    return string[Math.floor(mid)]
  }
}
console.log("middle 1:", getMiddle(middleLetters1))
console.log("middle 2:", getMiddle(middleLetters2))



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
