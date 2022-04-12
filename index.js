var player,
  winner = null
var selectedPlayer = document.getElementById('selected-player')
var selectedWinner = document.getElementById('selected-winner')
var blocks = document.getElementsByClassName('block')

changePlayer('X')

function checkBlock(id) {
  if (winner !== null) {
    return
  }
  var block = document.getElementById(id)
  if (block.innerHTML !== '-') {
    return
  }
  block.innerHTML = player
  block.style.color = '#000'

  if (player === 'X') {
    player = 'O'
  } else {
    player = 'X'
  }

  changePlayer(player)
  validateWinner()
}

function changePlayer(value) {
  player = value
  selectedPlayer.innerHTML = player
}

function validateWinner() {
  var block1 = document.getElementById(1)
  var block2 = document.getElementById(2)
  var block3 = document.getElementById(3)
  var block4 = document.getElementById(4)
  var block5 = document.getElementById(5)
  var block6 = document.getElementById(6)
  var block7 = document.getElementById(7)
  var block8 = document.getElementById(8)
  var block9 = document.getElementById(9)

  if (checkSequence(block1, block2, block3)) {
    changeColorBlock(block1, block2, block3)
    changeWinner(block1)
    return
  }

  if (checkSequence(block4, block5, block6)) {
    changeColorBlock(block4, block5, block6)
    changeWinner(block4)
    return
  }

  if (checkSequence(block7, block8, block9)) {
    changeColorBlock(block7, block8, block9)
    changeWinner(block7)
    return
  }

  if (checkSequence(block1, block4, block7)) {
    changeColorBlock(block1, block4, block7)
    changeWinner(block1)
    return
  }

  if (checkSequence(block2, block5, block8)) {
    changeColorBlock(block2, block5, block8)
    changeWinner(block2)
    return
  }

  if (checkSequence(block3, block6, block9)) {
    changeColorBlock(block3, block6, block9)
    changeWinner(block3)
    return
  }

  if (checkSequence(block1, block5, block9)) {
    changeColorBlock(block1, block5, block9)
    changeWinner(block1)
    return
  }

  if (checkSequence(block3, block5, block7)) {
    changeColorBlock(block3, block5, block7)
    changeWinner(block3)
  }
}

function changeColorBlock(block1, block2, block3) {
  block1.style.background = 'MediumSeaGreen'
  block2.style.background = 'MediumSeaGreen'
  block3.style.background = 'MediumSeaGreen'
}

function checkSequence(block1, block2, block3) {
  var isEqual = false

  if (block1.innerHTML !== '-' && block1.innerHTML === block2.innerHTML && block2.innerHTML === block3.innerHTML) {
    isEqual = true
  }

  return isEqual
}

function changeWinner(block) {
  winner = block.innerHTML
  selectedWinner.innerHTML = winner
}

function restart() {
  winner = null
  selectedWinner.innerHTML = ''

  for (var i = 1; i <= 9; i++) {
    var block = document.getElementById(i)
    block.style.background = '#eee'
    block.style.color = '#eee'
    block.innerHTML = '-'
  }

  changePlayer('X')
}
