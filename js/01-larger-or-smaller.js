//COMP690 
let numStr1 = prompt('Enter 1st number to compare')                 // Request first number
let numStr2 = prompt('Enter 2nd number to compare')                 // Request second number
num1 = Number(numStr1)                                              // Convert string to number
num2 = Number(numStr2)                                              // Convert string to number
if(isNaN(numStr1) || isNaN(numStr2)){                               // Validate if inputs are number
    window.alert('You did not enter a number on 1st or 2nd prompt') // If any input is not a number show error message
}
if(num1 > num2) {                                                   // Show if number 1 is greater
    document.write(`${num1} is greatest`)                               
} 
if(num2 > num1) {                                                   // Show if number 2 is greater
    document.write(`${num2} is greatest`)    
}
if(num1 === num2) {                                                  // Show if numbers are the same 
    document.write(`Both numbers are ${num1} and are the same`)       
} 
