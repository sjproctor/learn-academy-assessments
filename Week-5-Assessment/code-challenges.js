// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

<<<<<<< HEAD
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
=======



>>>>>>> e6d47ba1711b349858840dae18f8cd96f5b015b0

// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const doYouHaveAnA = (array) => array.filter(value => value.includes("a") || value.includes("A"))

console.log(doYouHaveAnA(arrayOfWords))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [3, 3, 5, 3, 2]
// Expected output: false

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

console.log(pokerWinner(hand1))
console.log(pokerWinner(hand2))
console.log(pokerWinner(hand3))
