import { describe, expect, test } from "@jest/globals";
import { Player } from "./Player";
import {
  INVALID_PLAYER_ID_ERROR,
  INVALID_PLAYER_NAME_ERROR,
} from "./constants";

describe("Player", () => {
  describe("constructor", () => {
    test("should create a player with an id and a name", () => {
      const player = new Player(1, "test");
      expect(player.id).toBe(1);
      expect(player.name).toBe("test");
    });
    test("should throw an error if the id is not provided", () => {
      expect(() => new Player()).toThrow(new Error(INVALID_PLAYER_ID_ERROR));
    });
    test("should throw an error if the name is not provided", () => {
      expect(() => new Player(1)).toThrow(new Error(INVALID_PLAYER_NAME_ERROR));
    });
    test("should throw an error if the name is empty", () => {
      expect(() => new Player(1, "")).toThrow(
        new Error(INVALID_PLAYER_NAME_ERROR)
      );
    });
  });

  describe("getId", () => {
    const player = new Player(1, "test");
    test("should return the id of the player", () => {
      expect(player.getId()).toBe(1);
    });
  });

  describe("getName", () => {
    const player = new Player(1, "test");
    test("should return the name of the player", () => {
      expect(player.getName()).toBe("test");
    });
  });
});
