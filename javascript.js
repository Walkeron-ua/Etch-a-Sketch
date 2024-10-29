const container = document.querySelector(".container");
const gridSizeBtn = document.querySelector("#gridSizeBtn");
let gridSize = 16;

gridSizeBtn.addEventListener("click", () => {
    let input;
    do {
        input = Number(prompt("Write a number from 1 to 100 to set up size of grid."));
    } while (isNaN(input) || input < 1 || input > 100);
    gridSize = input;
    createSquares(gridSize)
});

function createSquares(gridSize) {
    container.innerHTML = '';
    let amountSquares = gridSize * gridSize
    for (i = 0; i < amountSquares; i++) { 
        const newSquare = document.createElement("div");
        newSquare.style.width = `${960 / gridSize}px`
        newSquare.style.height = `${960 / gridSize}px`
        newSquare.addEventListener("mouseenter", () => newSquare.style.backgroundColor = "black");
        container.appendChild(newSquare);
    }
}

createSquares(gridSize);