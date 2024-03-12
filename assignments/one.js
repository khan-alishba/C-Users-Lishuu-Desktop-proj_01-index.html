const age = prompt("Enter your age:");
const student = prompt("Are you a student? (yes/No)");

if (age < 12) {
    ticketPrice = 5
}
else if (age > 11 && age < 19) {
    if (student == "yes") {
        ticketPrice = 8;
    }
    else {
        ticketPrice = 10;
    }
}

else{
    ticketPrice = 12;
}

alert("The ticket price is "+ "$" + ticketPrice);