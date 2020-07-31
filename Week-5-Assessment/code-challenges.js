// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const encoder = (string) => {
  let code = string.split("").map(value => {
    if(value === "a"){
      return 4
    } else if(value === "e"){
      return 3
    } else if(value === "i"){
      return 1
    } else if(value === "o"){
      return 0
    } else {
      return value
    }
  })
  return code.join("")
}
console.log(encoder(secretCodeWord1))
console.log(encoder(secretCodeWord2))



// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

// I could downcase everything first and compare it to a lowercase a, but then I wouldn't get my expected result. So I am just going to use the or operator to include a lower and uppercase
const doYouHaveAnA = (array) => {
  return array.filter(value => {
    return value.includes("a") || value.includes("A")
  })
}
console.log(doYouHaveAnA(arrayOfWords))


// refactor
const doYouHaveAnA2 = (array) => array.filter(value => value.includes("a") || value.includes("A"))
console.log(doYouHaveAnA2(arrayOfWords))

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
console.log(doYouHaveAnA3(arrayOfWords))



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [3, 3, 5, 3, 2]
// Expected output: false

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

console.log("hand1", fullHouse(hand1))
console.log("hand2", fullHouse(hand2))
console.log("hand3", fullHouse(hand3))


// Step by step build out notes
// Step 1
const fullHouse = (array) => {
  // create an object to store the variables, could do this just as variables, but I visually like that they are grouped
  let hand = {
    card1: 0,
    card2: 0
  }
  // looking through the array and using forEach to iterate
  // if the current value is equal to the first value in the array I'll increase the card1 count
  // if it is not equal to the first item, I'll just log the value for the time being
  array.forEach(value => {
    if(value === array[0]){
      hand.card1 += 1
    } else {
      console.log(value)
    }
  })
  console.log(hand)
}

// Step 2
const fullHouse = (array) => {
  // create a variable to hold the value of the the secondCard, the first card is just whatever the first value is in the array, but I don't know where the second card would be so I'll assign it as my else statement
  let secondCard = null
  let hand = {
    card1: 0,
    card2: 0
  }
  array.forEach(value => {
    if(value === array[0]){
      hand.card1 += 1
    } else {
      // rather than log the other cards, as soon as there is a new value, it becomes the secondCard
      secondCard = value
    }
  })
  // look at the array again update the object for the count of secondCard
  array.forEach(value => {
    if(value === secondCard){
      hand.card2 += 1
    }
  })
  console.log("here", hand)
}


const fullHouse = (array) => {
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

  // check for the win conditions, and return a boolean value to get the correct outcome based on the prompt
  if(hand.card1 === 3 && hand.card2 === 2){
    return true
  } else if(hand.card1 === 2 && hand.card2 === 3){
    return true
  } else {
    return false
  }
}






// Other option with similar logic
const pokerWinner = (array) => {
  let singleCard1 = array[0]
  let cardCount1 = 0
  let cardCount2 = 0
  let remainerArray = array.sort().filter(value => {
    if(value === singleCard1){
      cardCount1 += 1
    } else {
      return value
    }
  })
  let singleCard2 = remainerArray[0]
  remainerArray.filter(value => {
    if(value === singleCard2){
      cardCount2 += 1
    } else {
      return value
    }
  })
  if(cardCount1 === 3 && cardCount2 === 2){
    return "Full House!"
  } else if(cardCount2 === 2 && cardCount1 === 3){
    return "Full House!"
  } else {
    return "Sorry, not a full house!"
  }
}

// console.log(pokerWinner(hand1))
// console.log(pokerWinner(hand2))
// console.log(pokerWinner(hand3))
