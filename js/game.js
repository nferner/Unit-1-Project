console.log('hey')
const game = {
  start: function () {
    let board = new Board()
    board.startGame()
    board.render()
    this.play()
  },
  play: function() {
    while(!board.winner) {
      let position = prompt('name goes first');//there should be a div with submit button for player 1 and player 2 to submit there names.
      board.makePlay(position)
      board.checkWin()
    }
  }
}
