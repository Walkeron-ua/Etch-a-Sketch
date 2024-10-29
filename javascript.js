const container = document.querySelector(".container");
for (i = 0; i < 256; i++) { 
    const newSquare = document.createElement("div");
    newSquare.addEventListener("mousemove", () => newSquare.style.backgroundColor = "black")
    container.appendChild(newSquare);
}
