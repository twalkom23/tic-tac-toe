let squareOne; 
let squareTwo;
let squareThree;
let squareFour;
let squareFive;
let squareSix
let squareSeven;
let squareEight;
let squareNine;
let counter;
let userOneCross = 'X';
let userTwoNought = 'O';
let playerOneScore = 0;
let playerTwoScore = 0;
let winner = false;
//query for score displays
const player1Score = document.querySelector('.player1Score');
const player2Score = document.querySelector('.player2Score');
//To display whos turn it is
const player1Turn = document.querySelector('.player1Turn');
const player2Turn = document.querySelector('.player2Turn');

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
//query selector for the restart and new game buttons
const restartButton = document.querySelector('.restart');
const newGameButton = document.querySelector('.newGame');

//This function after each turn will check if there are any winning combinations of turns
function checkForWinner() {
    if (squareOne === 'X' && squareTwo === 'X' && squareThree === 'X') {
        playerOneScore += 1;
        winner = true;
        displayScores();
        
         
    }
    else if (squareOne === 'X' && squareFour === 'X' && squareSeven === 'X') {
        playerOneScore += 1;
        winner = true;
        displayScores();
        
    }
    else if (squareOne === 'X' && squareFive === 'X' && squareNine === 'X') {
        playerOneScore += 1;
        winner = true;
        displayScores();
    }
    else if (squareTwo === 'X' && squareFive === 'X' && squareEight === 'X') {
        playerOneScore += 1;
        winner = true;
        displayScores();
    }
    else if (squareThree === 'X' && squareSix === 'X' && squareNine === 'X') {
        playerOneScore += 1;
        winner = true;
        displayScores();
    }
    else if (squareThree === 'X' && squareFive === 'X' && squareSeven === 'X') {
        playerOneScore += 1;
        winner = true;
        displayScores();
    }
    else if (squareFour === 'X' && squareFive === 'X' && squareSix === 'X') {
        playerOneScore += 1;
        winner = true;
        displayScores();
    }
    else if (squareSeven === 'X' && squareEight === 'X' && squareNine === 'X') {
        playerOneScore += 1;
        winner = true;
        displayScores();
    }
    else if (squareOne === 'O' && squareTwo === 'O' && squareThree === 'O') {
        playerTwoScore += 1;
        winner = true;
        displayScores();
    }
    else if (squareOne === 'O' && squareFour === 'O' && squareSeven === 'O') {
        playerTwoScore += 1;
        winner = true;
        displayScores();
    }
    else if (squareOne === 'O' && squareFive === 'O' && squareNine === 'O') {
        playerTwoScore += 1;
        winner = true;
        displayScores();
    }
    else if (squareTwo === 'O' && squareFive === 'O' && squareEight === 'O') {
        playerTwoScore += 1;
        winner = true;
        displayScores();
    }
    else if (squareThree === 'O' && squareSix === 'O' && squareNine === 'O') {
        playerTwoScore += 1;
        winner = true;
        displayScores();
    }
    else if (squareThree === 'O' && squareFive === 'O' && squareSeven === 'O') {
        playerTwoScore += 1;
        winner = true;
        displayScores();
    }
    else if (squareFour === 'O' && squareFive === 'O' && squareSix === 'O') {
        playerTwoScore += 1;
        winner = true;
        displayScores();
    }
    else if (squareSeven === 'O' && squareEight === 'O' && squareNine === 'O') {
        playerTwoScore += 1;
        winner = true;
        displayScores();
    }
    else {
        console.log('No winners yet');
    }
}

function displayScores() {
    player1Score.innerHTML = "";
    player2Score.innerHTML = "";

    const player1ScoreDisplay = document.createElement('p');
    player1ScoreDisplay.classList.add('player1ScoreDisplay');
    player1ScoreDisplay.textContent = (playerOneScore);
    player1Score.appendChild(player1ScoreDisplay);

    const player2ScoreDisplay = document.createElement('p');
    player2ScoreDisplay.classList.add('player2ScoreDisplay');
    player2ScoreDisplay.textContent = (playerTwoScore);
    player2Score.appendChild(player2ScoreDisplay);
}

function newGame() {
    //empties the board of X and Os
    topLeft.innerHTML = "";
    topMiddle.innerHTML = "";
    topRight.innerHTML = "";
    middleLeft.innerHTML = "";
    middleMiddle.innerHTML = "";
    middleRight.innerHTML = "";
    bottomLeft.innerHTML = "";
    bottomMiddle.innerHTML = "";
    bottomRight.innerHTML = "";

    squareOne = undefined; 
    squareTwo = undefined;
    squareThree = undefined;
    squareFour = undefined;
    squareFive = undefined;
    squareSix = undefined;
    squareSeven = undefined;
    squareEight = undefined;
    squareNine = undefined;
    
    winner = false;
}
//displays on the screen whos turn it is
function displayTurn() {
    if (counter % 2 !== 0) {
        const leftDisplay = document.createElement('p');
        leftDisplay.classList.add('leftDisplay');
        leftDisplay.textContent = ('PLAYER 1 TURN - X');
        player2Turn.innerHTML = " ";
        player1Turn.appendChild(leftDisplay);
    }
    else {
        const rightDisplay = document.createElement('p');
        rightDisplay.classList.add('rightDisplay');
        rightDisplay.textContent = ('PLAYER 2 TURN - O');
        player1Turn.innerHTML = " ";
        player2Turn.appendChild(rightDisplay);
    }
}

//Main function of the game
function playGame () {

    const contentX = document.createElement('p');
    contentX.classList.add('content');
    contentX.textContent = ('X');

        


     //to keep track of whos turn it is
    counter = 1;
    displayTurn();
    topLeft.addEventListener('click', function() {
        if (squareOne !== undefined || winner === true) {
        }
        else if (counter % 2 !== 0) {
            squareOne = userOneCross;
            const contentXTopLeft = document.createElement('p');
            contentXTopLeft.classList.add('contentXTopLeft');
            contentXTopLeft.textContent = ('X');
            topLeft.appendChild(contentXTopLeft);
            checkForWinner();
            counter ++;
            displayTurn();
        }
        else {
            squareOne = userTwoNought;
            const contentOTopLeft = document.createElement('p');
            contentOTopLeft.classList.add('contentOTopLeft');
            contentOTopLeft.textContent = ('O');
            topLeft.appendChild(contentOTopLeft);
            checkForWinner();
            counter ++;
            displayTurn();
        }
        
        
        
    });
    topMiddle.addEventListener('click', function() {
        if (squareTwo !== undefined || winner === true){

        }
        else if (counter % 2 !== 0) {
            squareTwo = userOneCross;
            const contentXTopMiddle = document.createElement('p');
            contentXTopMiddle.classList.add('contentXTopMiddle');
            contentXTopMiddle.textContent = ('X');
            topMiddle.appendChild(contentXTopMiddle);
            checkForWinner();
            counter ++;
            displayTurn();
        }
        else {
            squareTwo = userTwoNought;
            const contentOTopMiddle = document.createElement('p');
            contentOTopMiddle.classList.add('contentOTopMiddle');
            contentOTopMiddle.textContent = ('O');
            topMiddle.appendChild(contentOTopMiddle);
            checkForWinner();
            counter ++;
            displayTurn();
        }
        
        
    });
    topRight.addEventListener('click', function() {
        if (squareThree !== undefined || winner === true) {

        }
        else if (counter % 2 !== 0) {
            squareThree = userOneCross;
            const contentXTopRight = document.createElement('p');
            contentXTopRight.classList.add('contentXTopRight');
            contentXTopRight.textContent = ('X');
            topRight.appendChild(contentXTopRight);
            checkForWinner();
            counter ++;
            displayTurn();
        }
        else {
            squareThree = userTwoNought;
            const contentOTopRight = document.createElement('p');
            contentOTopRight.classList.add('contentOTopRight');
            contentOTopRight.textContent = ('O');
            topRight.appendChild(contentOTopRight);
            checkForWinner();
            counter ++;
            displayTurn();
        }
       
    });
    middleLeft.addEventListener('click', function() {
        if (squareFour !== undefined || winner === true) {

        }
        else if (counter % 2 !== 0) {
            squareFour = userOneCross;
            const contentXMiddleLeft = document.createElement('p');
            contentXMiddleLeft.classList.add('contentXMiddleLeft');
            contentXMiddleLeft.textContent = ('X');
            middleLeft.appendChild(contentXMiddleLeft);
            checkForWinner();
            counter ++;
            displayTurn();
        }
        else {
            squareFour = userTwoNought;
            const contentOMiddleLeft = document.createElement('p');
            contentOMiddleLeft.classList.add('contentOMiddleLeft');
            contentOMiddleLeft.textContent = ('O');
            middleLeft.appendChild(contentOMiddleLeft);
            checkForWinner();
            counter ++;
            displayTurn();
        }
        
    });
    middleMiddle.addEventListener('click', function() {
        if (squareFive !== undefined || winner === true) {

        }
        else if (counter % 2 !== 0) {
            squareFive = userOneCross;
            const contentXMiddleMiddle = document.createElement('p');
            contentXMiddleMiddle.classList.add('contentXMiddleMiddle');
            contentXMiddleMiddle.textContent = ('X');
            middleMiddle.appendChild(contentXMiddleMiddle);
            checkForWinner();
            counter ++;
            displayTurn();
        }
        else {
            squareFive = userTwoNought;
            const contentOMiddleMiddle = document.createElement('p');
            contentOMiddleMiddle.classList.add('contentOMiddleMiddle');
            contentOMiddleMiddle.textContent = ('O');
            middleMiddle.appendChild(contentOMiddleMiddle);
            checkForWinner();
            counter ++;
            displayTurn();
        }
       
    });
    middleRight.addEventListener('click', function() {
        if (squareSix !== undefined || winner === true) {

        }
        else if (counter % 2 !== 0) {
            squareSix = userOneCross;
            const contentXMiddleRight = document.createElement('p');
            contentXMiddleRight.classList.add('contentXMiddleRight');
            contentXMiddleRight.textContent = ('X');
            middleRight.appendChild(contentXMiddleRight);
            checkForWinner();
            counter ++;
            displayTurn();
        }
        else {
            squareSix = userTwoNought;
            const contentOMiddleRight = document.createElement('p');
            contentOMiddleRight.classList.add('contentOMiddleRight');
            contentOMiddleRight.textContent = ('O');
            middleRight.appendChild(contentOMiddleRight);
            checkForWinner();
            counter ++;
            displayTurn();
        }
        
    });
    bottomLeft.addEventListener('click', function() {
        if (squareSeven !== undefined || winner === true) {

        }
        else if (counter % 2 !== 0) {
            squareSeven = userOneCross;
            const contentXBottomLeft = document.createElement('p');
            contentXBottomLeft.classList.add('contentXBottomLeft');
            contentXBottomLeft.textContent = ('X');
            bottomLeft.appendChild(contentXBottomLeft);
            checkForWinner();
            counter ++;
            displayTurn();
        }
        else {
            squareSeven = userTwoNought;
            const contentOBottomLeft = document.createElement('p');
            contentOBottomLeft.classList.add('contentOBottomLeft');
            contentOBottomLeft.textContent = ('O');
            bottomLeft.appendChild(contentOBottomLeft);
            checkForWinner();
            counter ++;
            displayTurn();
        }
        
    });
    bottomMiddle.addEventListener('click', function() {
        if (squareEight !== undefined || winner === true) {

        }
        else if (counter % 2 !== 0) {
            squareEight = userOneCross;
            const contentXBottomMiddle = document.createElement('p');
            contentXBottomMiddle.classList.add('contentXBottomMiddle');
            contentXBottomMiddle.textContent = ('X');
            bottomMiddle.appendChild(contentXBottomMiddle);
            checkForWinner();
            counter ++;
            displayTurn();
        }
        else {
            squareEight = userTwoNought;
            const contentOBottomMiddle = document.createElement('p');
            contentOBottomMiddle.classList.add('contentOBottomMiddle');
            contentOBottomMiddle.textContent = ('O');
            bottomMiddle.appendChild(contentOBottomMiddle);
            checkForWinner();
            counter ++;
            displayTurn();
        }
        
    });
    bottomRight.addEventListener('click', function() {
        if (squareNine !== undefined || winner === true) {

        }
        else if (counter % 2 !== 0) {
            squareNine = userOneCross;
            const contentXBottomRight = document.createElement('p');
            contentXBottomRight.classList.add('contentXBottomRight');
            contentXBottomRight.textContent = ('X');
            bottomRight.appendChild(contentXBottomRight);
            checkForWinner();
            counter ++;
            displayTurn();
        }
        else {
            squareNine = userTwoNought;
            const contentOBottomRight = document.createElement('p');
            contentOBottomRight.classList.add('contentOBottomRight');
            contentOBottomRight.textContent = ('O');
            bottomRight.appendChild(contentOBottomRight);
            checkForWinner();
            counter ++;
            displayTurn();
        }
        
    });
    restartButton.addEventListener('click', function() {
        
    });
    newGameButton.addEventListener('click', function() {
        newGame();
    }); 

}


playGame();