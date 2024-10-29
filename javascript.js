const container = document.querySelector(".container");
const gridSizeBtn = document.querySelector("#gridSizeBtn");
const colorBlackBtn = document.querySelector("#colorBlackBtn");
const colorRandomBtn = document.querySelector("#colorRandomBtn");
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
    let colored = true;
    container.innerHTML = '';
    let amountSquares = gridSize * gridSize
    colorBlackBtn.addEventListener("click", () => colored = false)
    colorRandomBtn.addEventListener("click", () => colored = true)
    for (i = 0; i < amountSquares; i++) { 
        const newSquare = document.createElement("div");
        newSquare.style.width = `${960 / gridSize}px`
        newSquare.style.height = `${960 / gridSize}px`
        newSquare.style.opacity = '0';
        newSquare.addEventListener("mouseenter", () => {
            if (colored) {
                randomColor(newSquare);
            }else {
                newSquare.style.backgroundColor = 'black';
            }
            let opacity = Number(newSquare.style.opacity);
            if (opacity < 1) {
                newSquare.style.opacity = `${opacity+0.1}`;
            }
        });
        container.appendChild(newSquare);
    }
}



function randomNumber() {
    return Math.floor(Math.random() * 255) + 1;
}
function randomColor(newSquare) { 
    return newSquare.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

//Reset button
document.querySelector("#resetGrid").addEventListener("click", () => createSquares(gridSize))

createSquares(gridSize);