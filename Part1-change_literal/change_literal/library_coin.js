'use strict';

window.coins = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    cents: 0,

    makeChange(number_of_cents) {
        if (typeof number_of_cents !== 'number' || number_of_cents < 0 || number_of_cents % 1 !== 0) {
            alert("Invalid input. Please provide a valid number of cents.");
            return {
                quarters: 0,
                dimes: 0,
                nickels: 0,
                cents: 0
            };
        }

        this.quarters = Math.floor(number_of_cents / 25);
        number_of_cents -= this.quarters * 25;

        this.dimes = Math.floor(number_of_cents / 10);
        number_of_cents -= this.dimes * 10;

        this.nickels = Math.floor(number_of_cents / 5);
        this.cents = number_of_cents % 5;

        return {
            quarters: this.quarters,
            dimes: this.dimes,
            nickels: this.nickels,
            cents: this.cents
        };
    }
};

