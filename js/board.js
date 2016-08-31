class Board {
  constructor() {
    this.chips = null,
    this.move = null,
    this.winner = null,
  };

  startGame() {
    this.chips = [];
    for (let i = 0; i < 42; i++) {
      this.chips.push(new Chip());
  };
    this.winner = null;
    this.move = 0;
  };

  canBePlayed(position) {
    return this.chips[position].isEmpty() && position < 42 && position >= 0;
  };

  makePlay(position) {
    if(this.canBePlayed(position)) {
      this.move % 2 === 0 ? this.blackChip(position) : this.whiteChip(position);
      return true;
    }
    return false;
  };

  hasWinningRow() {
    let chipValues = this.chips.map((chip) => {
      return chip.getValue();
    }).join('');
    this.hasWinningCombination(chipValues) ? this.winner = true : false;
  };

  hasWinningColumn() {
    let chipValues = [];
    for(let i = 0; i < /*what am I changing this to?*/; i++){
      for(let j = i; j < 42; )
    }
  }
}
