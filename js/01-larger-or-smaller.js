let numStr1 = prompt('Enter 1st number to compare')                 // COMP690 Request first number
let numStr2 = prompt('Enter 2nd number to compare')                 // Request second number
num1 = Number(numStr1)                                              // Convert string tonumber
num2 = Number(numStr2)                                              // Convert string to numer
if(isNaN(numStr1) || isNaN(numStr2)){                               // Validate if inputs are number
    window.alert('You did not enter a number on 1st or 2nd prompt') // If any input is not a number show error message
}else if(num1 == num2) {                                            // Show if numbers are the same 
    window.alert(`Both numbers are ${num1} and are the same`)       //
} else if(num1 > num2) {                                            // Show if number 1 is greater
    window.alert(`${num1} is greatest`)                             //  
} else {                                                            // If not the same or num1 is not greater, then num2 si greater
    window.alert(`${num2} is greatest`)    
}
