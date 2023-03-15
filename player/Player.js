import {
  INVALID_PLAYER_ID_ERROR,
  INVALID_PLAYER_NAME_ERROR,
} from "./constants";

export class Player {
  /**
   * The constructor of the Player class
   * @param {number} id the id of the player
   * @param {string} name the name of the player
   */
  constructor(id, name) {
    if (id === undefined) throw new Error(INVALID_PLAYER_ID_ERROR);
    if (name === undefined || name.length === 0)
      throw new Error(INVALID_PLAYER_NAME_ERROR);
    this.id = id;
    this.name = name;
    this.room = null;
  }

  /**
   * Returns the id of the player
   * @returns {number}
   */
  getId() {
    return this.id;
  }

  /**
   * Returns the name of the player
   * @returns {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Joins a room. Returns true if the join is successful and false if the room is full.
   * This method also removes the player from the current room.
   * @param {Room} room the room to join
   * @returns {bool} true if the join is successful
   */
  joinRoom(room) {
    if (room === null) return false;
    this.leaveRoom();

    if (!room.addPlayer(this)) return false;

    this.room = room;
    return true;
  }

  /**
   * Leaves the current room. Returns true if the leave is successful and false if the player is not in a room.
   * @returns {bool} true if the leave is successful.
   */
  leaveRoom() {
    if (this.room === null) return false;
    this.room.removePlayer(this);
    this.room = null;
    return true;
  }
}
