

let firstCard = 5
let secondCard = 15

let hasBlackjack = false
let isInGame = true
let cards = []

let message = ""

const messageElement = document.getElementById("message-el")
const resultElement = document.getElementById("result-el")
const cardsElement = document.getElementById("cards-el")


const cardsToString = (cards) => {

    outString = ""
    for (let i = 0; i < cards.length; i++) {
        outString += ` ${cards[i]}`
    } 

    return outString
}

const setResultScreen = () => {

    result = getCardResult(cards)
    checkWinLossBust(result)

    resultElement.textContent = `Result: ${result}`
    messageElement.textContent = message

    cardsElement.textContent = `Cards: ${cardsToString(cards)}`
}

const resetResultScreen = () => {
    resultElement.textContent = `Result: `
    messageElement.textContent = ""

    cardsElement.textContent = `Cards: `
    cards = []
}

const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

const startGame = () => {

    resetResultScreen()

    for (i = 0; i < 2; i++) {
        newCard = getRandomIntInclusive(2,11)
        cards.push(newCard)
    }

    setResultScreen()
}

const drawCard = () => {
    console.log("drawing card")

    newCard = getRandomIntInclusive(2,11)
    cards.push(newCard)

    setResultScreen()
}

const getCardResult = (cards) => {

    let result = 0

    for (i = 0; i < cards.length; i++) {
        result += cards[i]
    }

    return result
}

const checkWinLossBust = (result) => {

    if (result < 21) {
        message = `You've got ${result}, would you like to draw another card?`
    }
    else if (result > 21) {
        message = `You've got ${result} and are bust`
        isInGame = false
    }
    else {
        message = `You've got blackjack`
        hasBlackjack = true
    }
}

console.log(message)

console.log(hasBlackjack)