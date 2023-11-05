class Coins {
    constructor() {
        this.quarters = 0;
        this.dimes = 0;
        this.nickels = 0;
        this.cents = 0;
    }

    makeChange(cents) {
        if (typeof cents !== 'number' || cents < 0) {
            alert("Invalid input: Please enter a positive number of cents.");
        }

        this.quarters = Math.floor(cents / 25);
        cents %= 25;

        this.dimes = Math.floor(cents / 10);
        cents %= 10;

        this.nickels = Math.floor(cents / 5);
        this.cents = cents % 5;
    }
}
