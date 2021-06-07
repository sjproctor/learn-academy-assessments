// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

describe("encoder", () => {
  test("takes in a string and returns a coded message", () => {
    var secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    var secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    var secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    expect(encoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(encoder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(encoder(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// b) Create the function that makes the test pass.

const encoder = (string) => {
  let code = string.split("").map(value => {
    if(value.toLowerCase() === "a"){
      return 4
    } else if(value.toLowerCase() === "e"){
      return 3
    } else if(value.toLowerCase() === "i"){
      return 1
    } else if(value.toLowerCase() === "o"){
      return 0
    } else {
      return value
    }
  })
  return code.join("")
}


// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

// a) Create a test with an expect statement using the variable provided.

describe("doYouHaveAnA", () => {
  // a test method, nested within the describe block, that in plain words, describes that the function does.
  test("takes in an array and returns all the words that have the letter a in them", () => {
    var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    // Expected output: ["Apple", "Banana", "Orange"]
    var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    // Expected output: ["Mango", "Apricot", "Peach"]
    expect(doYouHaveAnA(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
    expect(doYouHaveAnA(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
  })
})

// b) Create the function that makes the test pass.

// I could downcase everything first and compare it to a lowercase a, but then I wouldn't get my expected result. So I am just going to use the or operator to include a lower and uppercase
const doYouHaveAnA = (array) => {
  return array.filter(value => {
    return value.includes("a") || value.includes("A")
  })
}

// refactor
const doYouHaveAnA2 = (array) => array.filter(value => value.includes("a") || value.includes("A"))

// This is an opportunity to talk about Regex. Regex is short for Regular Expressions. It is used for pattern matching with strings. Regex is a great tool, but I don't want that tool to become a crutch because it is really easy to copy and paste regex code from the internet. But you don't learn anything by doing that. So I tend to shy away from Regex during this program, but we can touch on it here for fun.

// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// In an overly simplified way, you can pass a method on a string and pass in characters that will make an evaluation. There are several different methods that can be used, but one is called .match and we can match for the character 'a' and pass the letter i that in Regex means that that whatever you pass in should be regarded as 'case insensitive'.
// Each regex expression is a pattern enclosed in / forward slash marks

const doYouHaveAnA3 = (array) => {
  return array.filter(value => {
    return value.match(/a/i)
    // can be an uppercase A or a lowercase a
  })
}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

describe("fullHouse", () => {
  test("that takes in an array of 5 numbers and determines whether or not the array is a “full house”", () => {
    var hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    var hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    var hand3 = [3, 3, 5, 3, 2]
    // Expected output: false
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})

// b) Create the function that makes the test pass.

const fullHouse = (array) => {
  // add this line after the first forEach
  let secondCard = null
  let hand = {
    card1: 0,
    card2: 0
  }
  array.forEach(value => {
    if(value === array[0]){
      hand.card1 += 1
    } else {
      secondCard = value
    }
  })
  array.forEach(value => {
    if(value === secondCard){
      hand.card2 += 1
    }
  })

  console.log(hand)
  if(hand.card1 === 3 && hand.card2 === 2){
    return true
  } else if(hand.card1 === 2 && hand.card2 === 3){
    return true
  } else {
    return false
  }
}



// Step by step build out notes
// Step 1
// const fullHouse = (array) => {
//   // create an object to store the variables, could do this just as variables, but I visually like that they are grouped
//   let hand = {
//     card1: 0,
//     card2: 0
//   }
//   // looking through the array and using forEach to iterate
//   // if the current value is equal to the first value in the array I'll increase the card1 count
//   // if it is not equal to the first item, I'll just log the value for the time being
//   array.forEach(value => {
//     if(value === array[0]){
//       hand.card1 += 1
//     } else {
//       console.log(value)
//     }
//   })
//   console.log(hand)
// }

// Step 2
// const fullHouse = (array) => {
//   // create a variable to hold the value of the the secondCard, the first card is just whatever the first value is in the array, but I don't know where the second card would be so I'll assign it as my else statement
//   let secondCard = null
//   let hand = {
//     card1: 0,
//     card2: 0
//   }
//   array.forEach(value => {
//     if(value === array[0]){
//       hand.card1 += 1
//     } else {
//       // rather than log the other cards, as soon as there is a new value, it becomes the secondCard
//       secondCard = value
//     }
//   })
  // look at the array again update the object for the count of secondCard
//   array.forEach(value => {
//     if(value === secondCard){
//       hand.card2 += 1
//     }
//   })
//   console.log("here", hand)
// }
//
//
// const fullHouse = (array) => {
//   let secondCard = null
//   let hand = {
//     card1: 0,
//     card2: 0
//   }
//   array.forEach(value => {
//     if(value === array[0]){
//       hand.card1 += 1
//     } else {
//       secondCard = value
//     }
//   })
//   array.forEach(value => {
//     if(value === secondCard){
//       hand.card2 += 1
//     }
//   })

  // check for the win conditions, and return a boolean value to get the correct outcome based on the prompt
//   if(hand.card1 === 3 && hand.card2 === 2){
//     return true
//   } else if(hand.card1 === 2 && hand.card2 === 3){
//     return true
//   } else {
//     return false
//   }
// }




// Ryan's logic - Now I'm going to use a map function to look at each value in the array. It took some trouble shooting, but I knew I was going to want to pass the value and the array through the map function. Once inside, I would want to look at the original array and figure out how many times that value occurs in the array. I opted with a filter method, originally thinking I would have an array of arrays that had each value listed inside the number of times they occured. But then I realized I could just chain a length method at the end to output an array of the number of times each value shows up.

// Basically it is going to look at each value in the array, compare it to the original array, and only return values that match the current values. The last method will count the length of that array, so we will end up with an array that gives the count of the element at each index.

// This last part is a bit unelegant compared to the above logic, but I figured if the counts array has both a 3 and a 2 it must be a full house

// const fullHouse = (array) => {
//   counts = array.map((value, i, array) =>{
//     return array.filter(val => (val === value)).length
//   })
//   return (counts.includes(3) && counts.includes(2) ?  true : false )
// }
// console.log(fullHouse(hand1))
// console.log(fullHouse(hand2))
// console.log(fullHouse(hand3))
// console.log(fullHouse(['K', 'K', 'K', 2, 2]))
// console.log(fullHouse(['A', 9, 9, 'A', 'A']))
