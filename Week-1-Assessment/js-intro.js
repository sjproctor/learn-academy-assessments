// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

const tempChecker = (temp) => {
    if(temp === 212){
        return `${temp} is at boiling point`
    } else if(temp > 212){
        return `${temp} is above boiling point`
    } else if(temp < 212){
        return `${temp} is below boiling point`
    }
}
console.log(tempChecker(temp1))
console.log(tempChecker(temp2))
console.log(tempChecker(temp3))


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

const mult5 = (array) => {
    let newArray = []
    for(let i=0; i<array.length; i++){
        newArray.push(array[i]*5)
    }
    return newArray
}
console.log(mult5(myNumbers1))

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

const mult5WithMap = (array) => {
    return array.map(value => value * 5)
}
console.log(mult5WithMap(myNumbers2))


// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

const vowelKicker = (string) => {
    let array = string.split("").filter(value => {
        let v = value.toLowerCase()
        return v !== "a" && v !== "e" && v !== "i" && v !== "o" && v !== "u"
    })
    return array.join("")
}
console.log(vowelKicker(stringWithVowels1))
console.log(vowelKicker(stringWithVowels2))



// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

const vowelKickerExpanded = (string) => {
    if(typeof string === "string"){
        let array = string.split("").filter(value => {
            let v = value.toLowerCase()
            return v !== "a" && v !== "e" && v !== "i" && v !== "o" && v !== "u"
        })
        return array.join("")
    } else {
        return "Please enter a string."
    }

}
console.log(vowelKickerExpanded(notAString1))
console.log(vowelKickerExpanded(notAString2))
console.log(vowelKickerExpanded(stringWithVowels1))


// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

const getCats = (array) => {
    return array.filter(value => {
        return value.animal === "cat"
    })
}
console.log(getCats(toonimals))

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

const getCatNames = (array) => {
    let cats = array.filter(value => value.animal !== "cat")
    return cats.map(value => value.name).join(" ")

}
console.log(getCatNames(toonimals))
