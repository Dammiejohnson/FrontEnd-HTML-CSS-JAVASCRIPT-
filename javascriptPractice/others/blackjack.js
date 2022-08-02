let messageEl = document.querySelector("#message-el")
let sumEl = document.getElementById("sum-el")
const btn = document.querySelector(".btn")

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// let sumEl = document.querySelector("#sum-el  ")


function startGame(){
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        
        message = "You've got a BlackJack!"
    } else {
        console.log("Hi");
        message = "You are out of the game!"
        isAlive = false
    }

    messageEl.innerHTML = message
}

btn.addEventListener("click", ()=>{
    startGame()
})


