console.log("Scripts loading....")

// let gridSize = prompt("What size grid would you like to create?")
// gridSize = parseInt(gridSize)

function getSize() {
    let gridSize = prompt("What size grid woudl you like to create?")
    gridSize = parseInt(gridSize)
    if (gridSize > 100) {
        alert("Grid too big!")
        getSize()
    }
    return gridSize
}

function addGrid(height) {
    //create a height x width sized grid

    let container = document.querySelector('#container')
    container.style.display = 'flex'
    container.style.flexWrap = 'wrap'
    container.style.justifyContent = 'space-evenly'
    container.style.width = '450px'
    container.style.height = '450px'
    container.style.padding = '2px'
    container.style.border = '1px solid black'
    container.style.margin = 'auto'

    for (let i = 0; i < height * height; i++) {
        let gridSquare = document.createElement('div')
        gridSquare.classList.add('grid-square')
        
        gridSquare.style.width = `${450/height}px`
        gridSquare.style.height = `${450/height}px`
        // gridSquare.style.backgroundColor = 'white'
        // gridSquare.style.margin = '2px'
        // gridSquare.style.border = '0.5px solid white'
        gridSquare.style.margin = '0px'

        gridSquare.addEventListener('mouseover', (e) => {
            e.target.classList.add('hover')
        })

        container.appendChild(gridSquare)
    }

}

function resetBoard() {
    // Reset the etch a sketch board to its default state
    console.log("resetting board")
    let container = document.querySelector('#container')
    let squares = document.querySelectorAll('.grid-square')
    squares.forEach((square) => {
        square.classList.remove('hover')
    })
    container.innerHTML = '';
    let gridSize = getSize()
    addGrid(gridSize)

}

document.querySelector('#reset').addEventListener('click', () => {
    resetBoard();
})

let gridSize = getSize()
addGrid(gridSize)