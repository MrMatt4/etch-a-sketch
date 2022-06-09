
function createGrid(noOfGrids) {
    noOfGrids = parseInt(noOfGrids);
    if (noOfGrids > 100 || noOfGrids < 1) {
        return "Error! Number can't be higher 100 or smaller than 1."
    }
    else {
        for (let x = 0; x < noOfGrids; x++) {
            const rowDivContainer = document.createElement('div');
            const containerDiv = document.querySelector('.grid-container');
            containerDiv.appendChild(rowDivContainer);
            for (let i = 0; i < noOfGrids; i++) {
                const createdDivRow = document.createElement('div');
                createdDivRow.classList.add('grid-boxes');
                rowDivContainer.appendChild(createdDivRow);
            }
        }
    }
}

input = window.prompt("Input an integer from 1 to 100.");

if (input) {
    createGrid(input);
}

createGrid(16);


