setup();

function setup() {
    setupGrid();
    setupOptionEventListeners();
}

function setupGrid(size = 16) {
    displaySize(size);
    drawGrid(size);
    setupGridEventListeners();
}

function resetGrid() {
    const grid = document.querySelector('#grid');
    grid.innerHTML = '';
}

function resizeGrid(e) {
    const size = e.currentTarget.value;
    
    resetGrid();
    setupGrid(size);
    displaySize(size);
}

function drawGrid(size) {
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

function displaySize(size) {
    const sizeText = document.querySelector(['label[for="size-slider"']);
    sizeText.textContent = `Size: ${size}`;
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