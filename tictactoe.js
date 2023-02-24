let currentPlayer = "X";
let gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

function play(cell) {
    if (cell.innerHTML !== "") {
        alert("This cell is already played.");
        return;
    }
    cell.innerHTML = currentPlayer;
    let row = cell.id.charAt(4);
    let col = cell.id.charAt(5);
    gameBoard[row][col] = currentPlayer;
    if (checkWin()) {
        alert(`Player ${currentPlayer} wins!`);
        reset();
        return;
    }
    if (checkDraw()) {
        alert("It's a draw!");
        reset();
        return;
    }
    switchPlayer();
}

function checkWin() {
    // Check rows
    for (let row = 0; row < 3; row++) {
        if (gameBoard[row][0] === currentPlayer &&
            gameBoard[row][1] === currentPlayer &&
            gameBoard[row][2] === currentPlayer) {
            return true;
        }
    }
    // Check columns
    for (let col = 0; col < 3; col++) {
        if (gameBoard[0][col] === currentPlayer &&
            gameBoard[1][col] === currentPlayer &&
            gameBoard[2][col] === currentPlayer) {
            return true;
        }
    }
    // Check diagonals
    if (gameBoard[0][0] === currentPlayer &&
        gameBoard[1][1] === currentPlayer &&
        gameBoard[2][2] === currentPlayer) {
        return true;
    }
    if (gameBoard[0][2] === currentPlayer &&
        gameBoard[1][1] === currentPlayer &&
        gameBoard[2][0] === currentPlayer) {
        return true;
    }
    return false;
}

function checkDraw() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (gameBoard[row][col] === "") {
                return false;
            }
        }
    }
    return true;
}

function switchPlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
}

function reset();