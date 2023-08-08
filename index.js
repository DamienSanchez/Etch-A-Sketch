const container = document.querySelector('.container');
const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('.new-grid');


//creates the grid based on user input
function createGrid() {
    const userInput = parseInt(prompt("Enter how big you want the sketch pad....Max = 100: "))
    const gridSize = userInput * userInput
    for (i = 0; i <= gridSize; i++) {
        const div = document.createElement('div');
        div.style.width = `calc(500px / ${userInput})`
        div.style.height = `calc(500px / ${userInput})`
        container.appendChild(div);
    }
}

//Hover effect that colors the "pixels"
const divs = document.querySelector('div')
divs.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = "pink"
});

button.addEventListener('click', ()=> {
    while (container.hasChildNodes())
    container.removeChild(container.firstChild)
    createGrid()
})

