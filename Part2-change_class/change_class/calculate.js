"use strict";

$(document).ready( () => {


    $("#calculate").click( () => {
        let cents = Math.floor( parseInt( $("#cents").val() ) );

        if (isNaN(cents) || cents < 0 || cents > 99) {
            alert("Please enter a valid number between 0 and 99");
        } else {
            change_calculator.makeChange(cents)
            // taking data 
            const quarters = change_calculator.quarters;
            const dimes = change_calculator.dimes;
            const nickels = change_calculator.nickels;
            const pennies = change_calculator.cents;
            // showing data 
            $("#quarters").val( quarters );
            $("#dimes").val( dimes );
            $("#nickels").val( nickels );
            $("#pennies").val( pennies );
            
            $("#cents").focus();
        }
    }); 
        $("#cents").focus();
            
});