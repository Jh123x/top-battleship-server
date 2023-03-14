import { ROOM_SIZE } from "./constants";

export class Room {
  /**
   * The constructor of the Room class
   * @param {number} id The id of the room
   * @param {String} name The name of the room
   * @param {number} room_size The size of the room
   */
  constructor(id, name, room_size = ROOM_SIZE) {
    this.id = id;
    this.name = name;
    this.room_size = room_size;
    this.players = [];
    this.game = null;
  }

  /**
   * Adds a player. Returns true if the addition is successful and false if the room is full.
   * @param {Player} player the player of the game
   * @returns bool
   */
  addPlayer(player) {
    if (this.players.length >= this.room_size) return false;
    this.players.push(player);

    // Start the game when there are 2 players
    if (this.player.length == 2) {
      this.game = new Game(this.players[0], this.players[1]);
    }
  }

  /**
   * Removes a player. Returns true if the removal is successful and false if the player is not in the room.
   * @param {Player} player the player to remove
   * @returns {bool}
   */
  removePlayer(player) {
    if (this.players.length <= 0 || !this.players.includes(player))
      return false;
    this.winner = this.players.find((p) => p !== player);
    this.closeRoom();
    return true;
  }

  /**
   * Returns the player with the given id.
   * @param {string} id the id of the player
   * @returns Player
   * @throws Error if the player is not in the room
   */
  getPlayer(id) {
    const player = this.players.find((p) => p.id === id);
    if (!player) throw new Error("Player not found");
    return player;
  }

  /**
   * Closes the room.
   * @returns {void}
   */
  closeRoom() {
    this.ended = true;
  }
}
