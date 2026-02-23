//COMP690 Grade Assigner
let numStr1 = prompt('Provide a number between 1 and 100')  // Request number from the user
num1 = Number(numStr1)                                      // Convert string to number
if(isNaN(numStr1)){                                         // Validate if input is a number
    window.alert('You did not enter a number')              
} else if (num1 < 1 || num1 > 100) {                        // Validate number is between 1 and 100
    window.alert('Only numbers between 1 and 100 are accepted') 
} else {
    switch (true) {                                         // Show grade depending on number value
        case (num1 < 60):
            document.write("You received an F");
            break;
        case (num1 < 70):
            document.write("You received an D");
            break;
        case (num1 < 80):
            document.write("You received an C");
            break;
        case (num1 < 90):
            document.write("You received an B");
            break;
        default:
            document.write("You received an A");
    }
} 

