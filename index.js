const container = document.querySelector('.container');
const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('.new-grid');
const MAX = 100;
let counterPlus = 0;
let counterMinus = 255;

//creates new grid
button.addEventListener('click', () => {
    while (container.hasChildNodes())
        container.removeChild(container.firstChild)
    createGrid()
})
//creates the grid based on user input
function createGrid() {
    counterPlus = 0;
    counterMinus = 255;
    const userInput = parseInt(prompt("Enter how big you want the sketch pad....Max = 100: "))
    userValue = promptLimit(userInput)
    const gridSize = userValue * userValue
    for (i = 0; i <= gridSize; i++) {
        const div = document.createElement('div');
        div.style.width = `calc(500px / ${userValue})`
        div.style.height = `calc(500px / ${userValue})`
        container.appendChild(div);
    }
}
//checks user iput MAX 100x100
function promptLimit(userValue) {
    if (userValue <= MAX) return userValue
    if (userValue > MAX) {
        while (userValue > 100) {
            userValue = parseInt(prompt("Enter how big you want the sketch pad....Max = 100: "))
        } return userValue
    }
}
//Hover effect that colors the "pixels"
const divs = document.querySelector('div')
divs.addEventListener('mouseover', function (e) {
    counterPlus++
    counterMinus--
    e.target.style.backgroundColor = `rgb(${counterPlus}, ${counterMinus}, ${counterPlus})`
});

