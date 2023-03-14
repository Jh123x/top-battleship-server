import { Board } from "../board/Board";

export class Game {
  /**
   * The constructor of the Battleship Game class
   * @param {Player} player1 The first player of the game
   * @param {Player} player2 The second player of the game
   */
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.turn = 1;
    this.p1_board = new Board();
    this.p2_board = new Board();
    this.winner = undefined;
  }

  /**
   * Returns the player whose turn it is.
   * @returns {Player}
   */
  getCurrentPlayer() {
    return this.turn % 2 === 1 ? this.player1 : this.player2;
  }
}
