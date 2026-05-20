const prompt = require("prompt-sync")()

let wins = 0 
let losses = 0 

let gameTimes = 0

while(true){
    const userChoice = prompt("Enter Rock, Paper or Scissors:('Q' to quit) ").toLowerCase()
    
    if(userChoice === "q"){
        break
    }

    const randomIndex = Math.round(Math.random() * 2)
    const pcArray = ["rock", "paper", "Scissors"]

    let pcChoice = pcArray[randomIndex].toLowerCase()
    
    if(userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors"){
    console.log("Please Enter a Valid Option")
        continue
    }
    if(userChoice === pcChoice){
        console.log(`This was a Draw!!\nYou Chosed ${userChoice} and PC Chosed ${pcChoice}`)
    } else if((userChoice==='paper' && pcChoice==="rock") || (userChoice==="rock" && pcChoice==="scissors")||(userChoice==="scissors"&&pcChoice==="paper")){
        console.log(`You Won!!\nYou Chosed ${userChoice} and PC Chosed ${pcChoice}`)
        wins+=1        
    } else{
        console.log(`That Was a Game For PC :(\nYou Chosed ${userChoice} and PC Chosed ${pcChoice}`)
        losses+=1
    }

}
console.log(`See You Later!!\nYour Wins=${wins}\nYour Losses=${losses}`)