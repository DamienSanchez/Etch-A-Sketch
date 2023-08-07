const container = document.querySelector('.container');

let grid = 4096;//total amount of divs needed to make square 
let num = 64
function createGrid(gridSize){
    for(i=0; i <= gridSize; i++){
        const div = document.createElement('div');
        div.style.width = `calc(940px / ${num})`
        div.style.height = `calc(500px / ${num})`
        container.appendChild(div);
    }
}
createGrid(grid);

const divs = document.querySelector('div')
divs.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = "coral"
});