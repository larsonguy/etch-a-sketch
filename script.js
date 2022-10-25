function getRandomRGB() {
    color = Math.floor(Math.random() * 256);
    return color;
}

function createGrid(userSize) {
    const grid = document.querySelector('#grid');
    let container = document.createElement('div');
    container.setAttribute('id', 'container');
    container.setAttribute('style', `grid-template-columns: repeat(${userSize}, 1fr); grid-template-rows: repeat(${userSize}, 1fr);`);
    grid.appendChild(container);
    for (i = 0; i < (userSize * userSize); i++) {
        let gridLW = (960/userSize);
        let gridDiv = document.createElement('div');
        gridDiv.setAttribute('class', 'grid');
        gridDiv.setAttribute('style', `width: ${gridLW}; height: ${gridLW};`)
        container.appendChild(gridDiv);
    }

    const gridDiv = document.querySelectorAll('.grid');
    gridDiv.forEach(div => {
            div.addEventListener('mouseenter', function(event) {
            event.target.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
        }, false);
    })
    
}

function setSize(){
    var element =  document.getElementById('grid');
    if (typeof(element) != 'undefined' && element != null) {
        element.innerHTML = '';
        let userInput = prompt("What size would you like for this etch-a-sketch? (e.g., '16' equals 16x16)")
        if(parseInt(userInput) > 100) {
            alert('Please do not select a number greater than 100. Try again.')
            return
        }
        createGrid(userInput);
    } else {
        let userInput = prompt("What size would you like for this etch-a-sketch? (e.g., '16' equals 16x16)")
        createGrid(userInput);
    }
}









