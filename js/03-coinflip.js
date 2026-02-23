// COMP690 Coin flip
let randomNum = Math.round(Math.random() )          // Get a ramdom number number between 0.01 and 0.99, round to 0 or 1 
if (randomNum === 0 )                               // Set flip to Heads or Tails
    coinFlip = 'Heads'
 else {
    coinFlip = 'Tails'                              // Setting and end to the if statement
};
    let userGuess= prompt(`Select Heads or Tails ${randomNum} ${coinFlip}`)                 
if (userGuess != 'Heads' && userGuess != 'Tails'){
        window.alert('User did not select Heads or Tails')
} else {
    if (coinFlip == 'Heads' && userGuess == coinFlip){
        document.write('The flip was Heads and you chose Heads...you win!')
    }   else if (coinFlip == 'Heads' && userGuess != coinFlip) {
        document.write('The flip was Heads but you chose Tails...you lose!')
    }   else if (coinFlip == 'Tails' && userGuess == coinFlip) {
        document.write('The flip was Tails and you chose Tails...you win!')
    }   else if (coinFlip == 'Tails' && userGuess != coinFlip) {
        document.write('The flip was Tails but you chose Heads...you lose!')
    }
}