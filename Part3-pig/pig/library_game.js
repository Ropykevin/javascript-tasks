"use strict";
import { Pig } from "./library_pig.js";
export const game = {
    player1: new Pig(),
    player2: new Pig(),
    currentPlayer: null,
    get isValid() {
        if (this.player1.name === "" || this.player2.name === "") {
            return false;
        } else {
            return true;
        }
    },
    start(name1, name2) {
        this.player1.name = name1;
        this.player2.name = name2;
        this.currentPlayer = this.player1;
        return this;
    },
    reset() {
        this.player1.reset();
        this.player2.reset();
        this.currentPlayer = this.player1

    },
    changePlayer() {
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
        return this
        // determine whether player1 or player2 is the current player, then
        // update the currentPlayer property to hold the other player.

    },
    hold(score1, score2) {
        // Call the hold() method of the current player
        this.currentPlayer.hold();

        // Determine whether player1 or player2 is the current player, then
        // update that player's score with the current total
        if (this.currentPlayer === this.player1) {
            score1 = this.currentPlayer.totalscore;
        } else {
            score2 = this.currentPlayer.totalscore;


        }
        // Switch to the other player
        this.changePlayer();
        return this
    },

    checkWinner() {
        // check the players' totals to see if either is at or above 100
        // points. If so, return that player's name. Otherwise, return 
        // the string "none".
        if (this.player1.totalscore >= 100) {
            return this.player1.name;
        } else if (this.player2.totalscore >= 100) {
            return this.player2.name;
        } else {
            return "none";
        }
    }


};