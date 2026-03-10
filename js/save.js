function saveGame(){

localStorage.setItem("score",score)
localStorage.setItem("level",level)
localStorage.setItem("moves",moves)

alert("Game Saved")

}

function loadGame(){

score=localStorage.getItem("score")
level=localStorage.getItem("level")
moves=localStorage.getItem("moves")

updateUI()

}
