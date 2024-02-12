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
let playerOneScore = 0;
let playerTwoScore = 0;

//adding a query selector to all of the buttons
const topLeft = document.querySelector('.topLeft');
const topMiddle = document.querySelector('.topMiddle');
const topRight = document.querySelector('.topRight');
const middleLeft = document.querySelector('.middleLeft');
const middleMiddle = document.querySelector('.middleMiddle');
const middleRight = document.querySelector('.middleRight');
const bottomLeft = document.querySelector('.bottomLeft');
const bottomMiddle = document.querySelector('.bottomMiddle');
const bottomRight = document.querySelector('.bottomRight');

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
//Function that adds a score to the leaderboard if someone wins
function addToLeaderBoard(winner) {
    if (winner === 'X Wins') {
        playerOneScore += 1;
    }
    else if (winner === 'O Wins') {
        playerTwoScore += 1;
    }
    else { 
    }
}

function playGame () {
    let counter = 1; //to keep track of whos turn it is
    topLeft.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareOne = userOneCross;
        }
        else {
            squareOne = userTwoNought;
        }
        console.log(checkForWinner());
        counter ++;
    });
    topMiddle.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareTwo = userOneCross;
        }
        else {
            squareTwo = userTwoNought;
        }
        console.log(checkForWinner());
        counter ++;
    });
    topRight.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareThree = userOneCross;
        }
        else {
            squareThree = userTwoNought;
        }
        console.log(checkForWinner());
        counter ++;
    });
    middleLeft.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareFour = userOneCross;
        }
        else {
            squareFour = userTwoNought;
        }
        console.log(checkForWinner());
        counter ++;
    });
    middleMiddle.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareFive = userOneCross;
        }
        else {
            squareFive = userTwoNought;
        }
        console.log(checkForWinner());
        counter ++;
    });
    middleRight.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareSix = userOneCross;
        }
        else {
            squareSix = userTwoNought;
        }
        console.log(checkForWinner());
        counter ++;
    });
    bottomLeft.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareSeven = userOneCross;
        }
        else {
            squareSeven = userTwoNought;
        }
        console.log(checkForWinner());
        counter ++;
    });
    bottomMiddle.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareEight = userOneCross;
        }
        else {
            squareEight = userTwoNought;
        }
        console.log(checkForWinner());
        counter ++;
    });
    bottomRight.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareNine = userOneCross;
        }
        else {
            squareNine = userTwoNought;
        }
        console.log(checkForWinner());
        counter ++;
    });
}


playGame();