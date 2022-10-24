(function (){

    "use strict"

    const container = document.querySelector("#container");
    const button = document.querySelector("button");
    button.addEventListener("click", replaceSquares);
    
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
    
    function replaceSquares() {
        let userSize = prompt("How many squares would you like on each row (max 100)?")
        if (userSize > 100) replaceSquares();
        container.replaceChildren();
        createSquares(userSize);
    }

    createSquares();
    

})()