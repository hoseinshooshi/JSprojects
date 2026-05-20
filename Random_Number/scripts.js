const prompt = require("prompt-sync")()

const tar = 10* Math.round(Math.random())

let guessNum = 0
const guess = Number(prompt("Guess the Number(0-100): "))

while (true){
    guessNum ++;
    if(guess > tar){
        console.log("The Number is Smaller!")       
    } else if(guess < tar) {
        console.log("The Number is Bigger")       
    } else if(guess === tar){
        console.log("That Was Correct!!")  
        break
    } else {
        console.log("Please Enter a Valid Number!")
    }
    console.log(`You guessed the Number on the ${guessNum} try`)
}