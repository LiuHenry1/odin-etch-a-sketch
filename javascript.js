let penDown;
let eraserDown;

setup();

/**
 * Set up environment including the option panel, grid, variables, and event listeners.
 */
function setup() {
    penDown = false;
    eraserDown = false;

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
 */
function resizeGrid() {
    const size = document.querySelector('#grid').getAttribute('value');
    
    resetGrid();
    setupGrid(size);
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

    const eraserToggle = document.querySelector('#eraser-toggle');
    eraserToggle.addEventListener('click', toggleEraser);
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

/**
 * Toggle pen on or off depending on current state
 */
function togglePen() {
    penDown = !penDown;
    eraserDown = false;

    resetToggleSelections();

    if (penDown) {
        const colorToggle = document.querySelector('#color-toggle');
        displayToggleSelection(colorToggle);
    } 
}

/**
 * Toggle eraser on or off depending on current state
 */
function toggleEraser() {
    eraserDown = !eraserDown;
    penDown = false;

    resetToggleSelections();

    if (eraserDown) {
        const eraserToggle = document.querySelector('#eraser-toggle');
        displayToggleSelection(eraserToggle);
    }
}

function displayToggleSelection(toggle) {
    toggle.classList.add('selected-toggle');
}

function resetToggleSelections() {
    const toggles = document.querySelectorAll('#toggles button');
    toggles.forEach(toggle => {
        toggle.classList.remove('selected-toggle');
    })
}

/**
 * Change the square depending on the toggles
 * If pen is down, color it black
 * If eraser is down, remove the color
 * Otherwise nothing
 */
function color() {
    const square = this;
    if (penDown) {
        square.classList.add('colored');
    } else if (eraserDown) {
        square.classList.remove('colored');
    }
}