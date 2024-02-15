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

    const contentX = document.createElement('p');
    contentX.classList.add('content');
    contentX.textContent = ('X');


    let counter = 1; //to keep track of whos turn it is
    topLeft.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareOne = userOneCross;
            const contentXTopLeft = document.createElement('p');
            contentXTopLeft.classList.add('contentXTopLeft');
            contentXTopLeft.textContent = ('X');
            topLeft.appendChild(contentXTopLeft);
        }
        else {
            squareOne = userTwoNought;
            const contentOTopLeft = document.createElement('p');
            contentOTopLeft.classList.add('contentOTopLeft');
            contentOTopLeft.textContent = ('O');
            topLeft.appendChild(contentOTopLeft);
        }
        console.log(checkForWinner());
        counter ++;
    });
    topMiddle.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareTwo = userOneCross;
            const contentXTopMiddle = document.createElement('p');
            contentXTopMiddle.classList.add('contentXTopMiddle');
            contentXTopMiddle.textContent = ('X');
            topMiddle.appendChild(contentXTopMiddle);
        }
        else {
            squareTwo = userTwoNought;
            const contentOTopMiddle = document.createElement('p');
            contentOTopMiddle.classList.add('contentOTopMiddle');
            contentOTopMiddle.textContent = ('O');
            topMiddle.appendChild(contentOTopMiddle);
        }
        console.log(checkForWinner());
        counter ++;
    });
    topRight.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareThree = userOneCross;
            const contentXTopRight = document.createElement('p');
            contentXTopRight.classList.add('contentXTopRight');
            contentXTopRight.textContent = ('X');
            topRight.appendChild(contentXTopRight);
        }
        else {
            squareThree = userTwoNought;
            const contentOTopRight = document.createElement('p');
            contentOTopRight.classList.add('contentOTopRight');
            contentOTopRight.textContent = ('O');
            topRight.appendChild(contentOTopRight);
        }
        console.log(checkForWinner());
        counter ++;
    });
    middleLeft.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareFour = userOneCross;
            const contentXMiddleLeft = document.createElement('p');
            contentXMiddleLeft.classList.add('contentXMiddleLeft');
            contentXMiddleLeft.textContent = ('X');
            middleLeft.appendChild(contentXMiddleLeft);
        }
        else {
            squareFour = userTwoNought;
            const contentOMiddleLeft = document.createElement('p');
            contentOMiddleLeft.classList.add('contentOMiddleLeft');
            contentOMiddleLeft.textContent = ('O');
            middleLeft.appendChild(contentOMiddleLeft);
        }
        console.log(checkForWinner());
        counter ++;
    });
    middleMiddle.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareFive = userOneCross;
            const contentXMiddleMiddle = document.createElement('p');
            contentXMiddleMiddle.classList.add('contentXMiddleMiddle');
            contentXMiddleMiddle.textContent = ('X');
            middleMiddle.appendChild(contentXMiddleMiddle);
        }
        else {
            squareFive = userTwoNought;
            const contentOMiddleMiddle = document.createElement('p');
            contentOMiddleMiddle.classList.add('contentOMiddleMiddle');
            contentOMiddleMiddle.textContent = ('O');
            middleMiddle.appendChild(contentOMiddleMiddle);
        }
        console.log(checkForWinner());
        counter ++;
    });
    middleRight.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareSix = userOneCross;
            const contentXMiddleRight = document.createElement('p');
            contentXMiddleRight.classList.add('contentXMiddleRight');
            contentXMiddleRight.textContent = ('X');
            middleRight.appendChild(contentXMiddleRight);
        }
        else {
            squareSix = userTwoNought;
            const contentOMiddleRight = document.createElement('p');
            contentOMiddleRight.classList.add('contentOMiddleRight');
            contentOMiddleRight.textContent = ('O');
            middleRight.appendChild(contentOMiddleRight);
        }
        console.log(checkForWinner());
        counter ++;
    });
    bottomLeft.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareSeven = userOneCross;
            const contentXBottomLeft = document.createElement('p');
            contentXBottomLeft.classList.add('contentXBottomLeft');
            contentXBottomLeft.textContent = ('X');
            bottomLeft.appendChild(contentXBottomLeft);
        }
        else {
            squareSeven = userTwoNought;
            const contentOBottomLeft = document.createElement('p');
            contentOBottomLeft.classList.add('contentOBottomLeft');
            contentOBottomLeft.textContent = ('O');
            bottomLeft.appendChild(contentOBottomLeft);
        }
        console.log(checkForWinner());
        counter ++;
    });
    bottomMiddle.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareEight = userOneCross;
            const contentXBottomMiddle = document.createElement('p');
            contentXBottomMiddle.classList.add('contentXBottomMiddle');
            contentXBottomMiddle.textContent = ('X');
            bottomMiddle.appendChild(contentXBottomMiddle);
        }
        else {
            squareEight = userTwoNought;
            const contentOBottomMiddle = document.createElement('p');
            contentOBottomMiddle.classList.add('contentOBottomMiddle');
            contentOBottomMiddle.textContent = ('O');
            bottomMiddle.appendChild(contentOBottomMiddle);
        }
        console.log(checkForWinner());
        counter ++;
    });
    bottomRight.addEventListener('click', function() {
        if (counter % 2 !== 0) {
            squareNine = userOneCross;
            const contentXBottomRight = document.createElement('p');
            contentXBottomRight.classList.add('contentXBottomRight');
            contentXBottomRight.textContent = ('X');
            bottomRight.appendChild(contentXBottomRight);
        }
        else {
            squareNine = userTwoNought;
            const contentOBottomRight = document.createElement('p');
            contentOBottomRight.classList.add('contentOBottomRight');
            contentOBottomRight.textContent = ('O');
            bottomRight.appendChild(contentOBottomRight);
        }
        console.log(checkForWinner());
        counter ++;
    });
}


playGame();