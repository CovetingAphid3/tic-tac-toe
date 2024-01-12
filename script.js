const players = {
    playerOne: 'X',
    playerTwo: 'O'
};

let currentPlayer = players.playerOne;
const cell = document.querySelectorAll('.cell');

function switchPlayer() {
    currentPlayer = (currentPlayer === players.playerOne) ? players.playerTwo : players.playerOne;
}

function getClick() {
    cell.forEach(function(cell) {
        cell.addEventListener('click', function() {
            if (cell.innerHTML === '') {
                updateBoard(cell, currentPlayer);
                const winInfo = checkWin(currentPlayer);
                if (winInfo) {
                    alert(`Player ${currentPlayer} wins with ${winInfo}`);
                    resetBoard();
                } else {
                    switchPlayer();
                }
            }
        });
    });
}

function updateBoard(cell, currentPlayer) {
    cell.innerHTML = currentPlayer;
}

function getCellValue() {
    cell.forEach(function(cell) {
        var cellIndex = cell.getAttribute('data-cell-index');
        console.log('Cell Index:', cellIndex);
    });
}

function checkWin(player) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (
            (getCell(0, i) === player && getCell(1, i) === player && getCell(2, i) === player) ||
            (getCell(i, 0) === player && getCell(i, 1) === player && getCell(i, 2) === player)
        ) {
            return `row ${i + 1}`;
        }
    }

    // Check diagonals
    if (
        (getCell(0, 0) === player && getCell(1, 1) === player && getCell(2, 2) === player) ||
        (getCell(0, 2) === player && getCell(1, 1) === player && getCell(2, 0) === player)
    ) {
        return 'diagonal';
    }

    return false;
}

function getCell(row, col) {
    // Get the cell value at the specified row and column
    return cell[row * 3 + col].innerHTML;
}

function resetBoard() {
    // Clear the board and reset the currentPlayer
    cell.forEach(function(cell) {
        cell.innerHTML = '';
    });
    currentPlayer = players.playerOne;
}

function testFunctions() {
    getClick();
    getCellValue();
}

testFunctions();
