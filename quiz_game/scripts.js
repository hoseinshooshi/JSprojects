const prompt = require("prompt-sync")()

console.log("Welcome to the Quiz Game!");
let userScore = 0;
const answer1 = prompt("what is brain of the computer? ");
let term = "Please Study :("

if(answer1.toLowerCase() === "cpu"){
    console.log("that was correct")
    userScore += 1
} else { 
    console.log("that was incorrect")
}

const answer2 = prompt("what is the short term memory of the computer? ");

if(answer2.toLowerCase() === "ram"){
    console.log("that was correct")
    userScore += 1
} else { 
    console.log("that was incorrect")
}

const answer3 = prompt("what is the core app in os of the computer? ");

if(answer3.toLowerCase() === "kernel"){
    console.log("that was correct")
    userScore += 1
} else { 
    console.log("that was incorrect")
}

if(userScore == 3) {
    term = "that was awesome."
} if(userScore == 2){
    term = "that was very Close."
} if(userScore == 1) {
    term = "Study more!"
}
console.log(`The Quiz has Ended! you got ${userScore}/3 Correct! ${term}`)
term = ""