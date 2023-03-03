let player = { // creating objects which are inter-connected
    name: "Phil",// the name and chip keys while  "phil " and 145 are values
    chip: 145
}

let cards = [] // an array 
let thirdCard = 0
let wonTheGame = false
let isAlive = false

let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.getElementById("player-el") // storing the player-el in the playerEl variable
playerEl.textContent = player.name + ":  $ " + player.chip

function getRadomCard() {

    let randomCard = Math.floor(Math.random() * 13) + 1 // use both the Math . floor and random method and +1 so as to start the game from 1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}
