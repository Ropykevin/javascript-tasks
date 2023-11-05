'use strict';

$(document).ready(() => {
    $("#calculate").click(() => {
        // get the number of cents from the user
        let cents = Math.floor(parseInt($("#cents").val()));

        if (isNaN(cents) || cents < 0 || cents > 99) {
            alert("Please enter a valid number between 0 and 99");
        } else {
            coins.makeChange(cents);

            // calculate the number of quarters
            coins.quarters = Math.floor(cents / 25);  // get number of quarters
            cents = cents % 25;         // assign the remainder to the cents variable

            // calculate the number of dimes
            coins.dimes = Math.floor(cents / 10);    // get number of dimes
            cents = cents % 10;         // assign the remainder to the cents variable

            // calculate the number of nickels
            coins.nickels = Math.floor(cents / 5);

            // calculate the number of pennies
            coins.pennies = cents % 5;

            // display the results of the calculations
            $("#quarters").val(coins.quarters);
            $("#dimes").val(coins.dimes);
            $("#nickels").val(coins.nickels);
            $("#pennies").val(coins.pennies);

            // set focus on cents text box
            $("#cents").focus();
        }
    }); // end click() method

    // set focus on cents text box on initial load
    $("#cents").focus();
}); // end ready() method
