
function createGrid(userSize) {
    const container = document.querySelector('#container')
    container.setAttribute('style', `grid-template-columns: repeat(${userSize}, 1fr); grid-template-rows: repeat(${userSize}, 1fr);`);
    for (i = 0; i < (userSize * userSize); i++) {
        let gridLW = (960/userSize);
        let gridDiv = document.createElement('div');
        gridDiv.className = 'grid';
        gridDiv.setAttribute('style', `width: ${gridLW}; height: ${gridLW};`)
        container.appendChild(gridDiv);
    }

    const gridDiv = document.querySelectorAll('.grid');
    gridDiv.forEach(div => {
            div.addEventListener('mouseenter', function(event) {
            event.target.style.backgroundColor = "purple";
        }, false);
    })
}

function setSize(){
    let userInput = prompt("What size would you like for this etch-a-sketch? (e.g., '16' equals 16x16)")
    createGrid(userInput);
} 








