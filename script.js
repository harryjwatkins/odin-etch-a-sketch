(function (){

    "use strict"

    const container = document.querySelector("#container");

    for (let i = 0; i<16*16; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);

        square.addEventListener("mouseover", fillSquare);
    }

    function fillSquare (e) {
        e.target.classList.add("filled");
    }
    


})()