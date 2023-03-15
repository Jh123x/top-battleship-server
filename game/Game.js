import { Board } from "../board/Board";
import { INVALID_PLAYERS } from "./constants";

export class Game {
  /**
   * The constructor of the Battleship Game class
   * @param {Player} player1 The first player of the game
   * @param {Player} player2 The second player of the game
   */
  constructor(player1, player2) {
    if (player1 === undefined || player2 === undefined)
      throw new Error(INVALID_PLAYERS);

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

  /**
   * Returns true if the player is in the game.
   * @param {Player} player the player to check
   * @returns {bool}
   */
  hasPlayer(player) {
    return player === this.player1 || player === this.player2;
  }

  /**
   * Ends the game and sets the winner. Does nothing if there is already a winner.
   * @param {Player} loser the player who lost.
   */
  endGameWithLoser(loser) {
    if (this.winner !== undefined) return;
    this.winner = loser === this.player1 ? this.player2 : this.player1;
  }

  /**
   * Ends the game and sets the winner. Does nothing if there is already a winner.
   * @param {Player} winner the player who won.
   * @return {void}
   */
  endGameWithWinner(winner) {
    if (this.winner !== undefined) return;
    this.winner = winner;
  }

  /**
   * Returns true if the game is over.
   * @returns {bool}
   */
  isOver() {
    return this.winner !== undefined;
  }

  /**
   * Returns the winner of the game. Returns undefined if the game is not over.
   * @returns {Player | undefined}
   */
  getWinner() {
    return this.winner;
  }

  /**
   * Places a ship on the board of the player whose turn it is.
   * @param {Player} player the player who is placing the ship
   * @param {Ship} ship the ship to place
   * @param {number} x the x coordinate of the ship
   * @param {number} y the y coordinate of the ship
   * @param {bool} isVertical true if the ship is vertical
   * @returns {bool} true if the ship is placed successfully
   */
  placeShip(player, ship, x, y, isVertical) {
    if (!this.hasPlayer(player)) return false;
    if (this.isOver()) return false;

    const board = player === this.player1 ? this.p1_board : this.p2_board;
    return board.placeShip(ship, x, y, isVertical);
  }

  /**
   * Attacks the board of the player whose turn it is.
   * @param {Player} player the player who is attacking
   * @param {number} x the x coordinate of the attack
   * @param {number} y the y coordinate of the attack
   * @returns {bool} true if the attack is successful
   */
  attack(player, x, y) {
    if (!this.hasPlayer(player)) return false;
    if (this.isOver()) return false;
    if (player !== this.getCurrentPlayer()) return false;
    const board = player === this.player1 ? this.p2_board : this.p1_board;

    try {
      board.makeGuess(x, y);
      ++this.turn;
      if (board.allShipsSunk()) this.endGameWithWinner(player);
      return true;
    } catch (e) {
      return false;
    }
  }
}
