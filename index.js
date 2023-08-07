const container = document.querySelector('.container');

let grid = 256;//total amount of divs needed to make square 

function createGrid(gridSize){
    for(i=0; i <= gridSize; i++){
        const div = document.createElement('div');
        container.appendChild(div);
    }
}
createGrid(255);