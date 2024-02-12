let squareOne; 
let squareTwo;
let squareThree;
let squareFour;
let squareFive;
let squareSix
let squareSeven;
let squareEight;
let squareNine;
let userOneCross = 'X';
let userTwoNought = 'O';

//This function after each turn will check if there are any winning combinations of turns
function checkForWinner() {
    if (squareOne === 'X' && squareTwo === 'X' && squareThree === 'X') {
        return 'X Wins';
    }
    else if (squareOne === 'X' && squareFour === 'X' && squareSeven === 'X') {
        return 'X Wins';
    }
    else if (squareOne === 'X' && squareFive === 'X' && squareNine === 'X') {
        return 'X Wins';
    }
    else if (squareTwo === 'X' && squareFive === 'X' && squareEight === 'X') {
        return 'X Wins';
    }
    else if (squareThree === 'X' && squareSix === 'X' && squareNine === 'X') {
        return 'X Wins';
    }
    else if (squareThree === 'X' && squareFive === 'X' && squareSeven === 'X') {
        return 'X Wins';
    }
    else if (squareFour === 'X' && squareFive === 'X' && squareSix === 'X') {
        return 'X Wins';
    }
    else if (squareSeven === 'X' && squareEight === 'X' && squareNine === 'X') {
        return 'X Wins';
    }
    else if (squareOne === 'O' && squareTwo === 'O' && squareThree === 'O') {
        return 'O Wins';
    }
    else if (squareOne === 'O' && squareFour === 'O' && squareSeven === 'O') {
        return 'O Wins';
    }
    else if (squareOne === 'O' && squareFive === 'O' && squareNine === 'O') {
        return 'O Wins';
    }
    else if (squareTwo === 'O' && squareFive === 'O' && squareEight === 'O') {
        return 'O Wins';
    }
    else if (squareThree === 'O' && squareSix === 'O' && squareNine === 'O') {
        return 'O Wins';
    }
    else if (squareThree === 'O' && squareFive === 'O' && squareSeven === 'O') {
        return 'O Wins';
    }
    else if (squareFour === 'O' && squareFive === 'O' && squareSix === 'O') {
        return 'O Wins';
    }
    else if (squareSeven === 'O' && squareEight === 'O' && squareNine === 'O') {
        return 'O Wins'
    }
    else {
        return 'No winners yet, continue game';
    }
}






