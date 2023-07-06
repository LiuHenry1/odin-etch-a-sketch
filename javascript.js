let penDown;

setup();

/**
 * Set up environment including the option panel, grid, and event listeners.
 */
function setup() {
    penDown = false;

    setupGrid();
    setupOptionEventListeners();
}

/**
 * Set up grid
 * @param {Number} size - the dimensions of the grid
 */
function setupGrid(size = 16) {
    displaySize(size);
    drawGrid(size);
    setupGridEventListeners();
}

/**
 * Reset the grid by removing all of its children
 */
function resetGrid() {
    const grid = document.querySelector('#grid');
    grid.innerHTML = '';
}

/**
 * Resize the grid when size-slider changes and change the display of size-slider text
 * @param {*} e 
 */
function resizeGrid(e) {
    const size = e.currentTarget.value;
    
    resetGrid();
    setupGrid(size);
    displaySize(size);
}

/**
 * Draw the grid with provided size
 * @param {Number} size - the dimensions of the grid
 */
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

/**
 * Set up event listeners for the grid
 */
function setupGridEventListeners() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', color)
    })
}

/**
 * Set up event listeners for the option panel
 */
function setupOptionEventListeners() {
    const sizeSlider = document.querySelector('#size-slider');
    sizeSlider.addEventListener('change', resizeGrid);

    const colorToggle = document.querySelector('#color-toggle');
    colorToggle.addEventListener('click', togglePen);
}

/**
 * Display the value of the size-slider
 * @param {Number} size 
 */
function displaySize(size) {
    const sizeText = document.querySelector(['label[for="size-slider"']);
    sizeText.textContent = `Size: ${size}`;
}

/**
 * A helper method to create individual squares of the grid
 * @returns an element representing a square
 */
function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');

    return square;
}

function togglePen() {
    penDown = !penDown;
}

/**
 * Change the color of the square that the moused hovered over
 * @param {Event} e - the event that triggers this function
 */
function color(e) {
    if (!penDown)
        return;

    const square = e.currentTarget;
    square.classList.add('colored');
}