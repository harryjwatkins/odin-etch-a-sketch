(function (){

    "use strict"

    const container = document.querySelector("#container");
    const button = document.querySelector("button");
    button.addEventListener("click", getSquareSize);

    function createSquares (numSquares = 16) {
        for (let i = 0; i<numSquares*numSquares; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.height = `${800/numSquares}px`;
            square.style.width = `${800/numSquares}px`;
            container.appendChild(square);
    
            square.addEventListener("mouseover", fillSquare);
        }
    }


    function fillSquare (e) {
        e.target.classList.add("filled");
    }
    
    function getSquareSize () {
        let numSquares = prompt("Please enter the number of squares per row (max 100)");
        if (numSquares > 100) getSquareSize();
        else return numSquares;
    }



})()