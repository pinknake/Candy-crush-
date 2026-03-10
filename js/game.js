const boardSize=8

let score=0
let level=1
let moves=30

function newGame(){

score=0
level=1
moves=30

updateUI()

createBoard()

}

function createBoard(){

const board=document.getElementById("gameBoard")

board.innerHTML=""

for(let i=0;i<64;i++){

let candy=document.createElement("div")

candy.className="candy"

candy.style.background=randomColor()

board.appendChild(candy)

}

}

function randomColor(){

const colors=["red","blue","green","yellow","purple"]

return colors[Math.floor(Math.random()*colors.length)]

}

function updateUI(){

document.getElementById("score").innerText=score
document.getElementById("level").innerText=level
document.getElementById("moves").innerText=moves

}

newGame()
