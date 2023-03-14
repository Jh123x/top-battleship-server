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
}
