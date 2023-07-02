const DEFAULT_SIZE = 16;

function drawGrid() {
    const grid = document.querySelector('#grid');

    for (let row = 0; row < DEFAULT_SIZE; row++) {
        let row = document.createElement('div');
        row.classList.add('row');
            for (let col = 0; col < DEFAULT_SIZE; col++) {
                let square = createSquare();
                row.appendChild(square);
            }
            grid.appendChild(row);
    }
}

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');

    return square;
}

function color(e) {
    const square = e.currentTarget;
    square.classList.add('colored');
}

function setUpEventListeners() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', color)
    })
}

drawGrid();
setUpEventListeners();