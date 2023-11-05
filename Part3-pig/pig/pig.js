"use strict";
import { game } from "./library_game.js";

$(document).ready(() => {
    $("#new_game").click(() => {
        // Clear any previous data from the page
        $("#result").text("");
        $("#score1").val("0");
        $("#score2").val("0");
        $("#die").val("0");
        $("#total").val("0");

        // Reset the game object and start a new game, passing in the players' names
        game.reset()
        game.start($("#player1").val(), $("#player2").val());

        // Check if the game object contains valid data
        if (game.isValid) {
            // Display the "turn" div, use the currentPlayer property of the game object to display the name of the player whose turn it is, and set the focus on the Roll button
            $("#turn").removeClass("hide");
            $("#current").text(game.currentPlayer.name);
            $("#roll").focus();
        } else {
            // Hide the "turn" div, notify the user to enter player names, and set the focus on the Player 1 text box
            $("#turn").addClass("hide");
            alert("Please enter two player names.");
            $("#player1").focus();
        }
    });

    $("#roll").click(() => {
        // Use the currentPlayer property of the game object to take a turn
        game.currentPlayer.takeTurn();

        // Set the value of the Die text box to the value of the roll property of the currentPlayer property
        const roll_value = game.currentPlayer.roll;

        if (roll_value === 1) {
            game.changePlayer();
        }

        // Check the read-only isBust property for the current player. If it's true, set the value of the Total text box to zero, use the game object to change players, and use the currentPlayer property of the game object to display the name of the player whose turn it now is. Otherwise, set the value of the Total text box to the value of the turn property of currentPlayer.
        if (game.currentPlayer.isBust) {
            $("#total").val(0);
            game.changePlayer();
            $("#current").text(game.currentPlayer.name);
        } else {
            $("#total").val(game.currentPlayer.turn);
        }

        // Set the focus on the Roll button
        $("#roll").focus();
    });

    $("#hold").click(() => {
        // Use the game object to hold, passing in the Score1 and Score2 elements
        game.hold();
        const winner = game.checkWinner();

        // If the value of the winner variable is "none," set the value of the Die and Total text boxes to zero, use the game object to change players, use the currentPlayer property of the game object to display the name of the player whose turn it now is, and set the focus on the Roll button. Otherwise, set the value of the result span element to indicate the name of the winner.
        if (winner === "none") {
            $("#die").val(0);
            $("#total").val(0);
            game.changePlayer();
            $("#current").text(game.currentPlayer.name );
            $("#roll").focus();
        } else {
            $("#result").text(winner );
        }
    });

    // Set focus on the Player 1 text box on initial page load
    $("#player1").focus();
});
