function resetGrid() {
    const grid = document.querySelector('#grid');
    grid.innerHTML = '';
}

function resizeGrid(e) {
    const size = e.currentTarget.value;
    resetGrid();
    drawGrid(size);
    setupGridEventListeners();
}

function drawGrid(size = 16) {
    const grid = document.querySelector('#grid');

    for (let row = 0; row < size; row++) {
        let row = document.createElement('div');
        row.classList.add('row');
            for (let col = 0; col < size; col++) {
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

function setupGridEventListeners() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', color)
    })
}

function setupOptionEventListeners() {
    const sizeSlider = document.querySelector('#size-slider');
    sizeSlider.addEventListener('change', resizeGrid);
}

function setup() {
    drawGrid();
    setupGridEventListeners();
    setupOptionEventListeners();
}

setup();