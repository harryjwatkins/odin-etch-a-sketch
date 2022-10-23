(function (){

    "use strict"

    const container = document.querySelector("#container");

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
    



})()