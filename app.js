let gridCreated = false;


function createGrid(noOfGrids) {
    noOfGrids = parseInt(noOfGrids);

    if (gridCreated) {
       let allRowGrids = document.querySelectorAll('row-grid');
       const containerDiv = document.querySelector('.grid-container');

       allRowGrids.forEach( function(element) {
           while (element.firstElementChild) {
               element.removeChild(element.lastElementChild);
           }
       });
       while (containerDiv.firstElementChild) {
           containerDiv.removeChild(containerDiv.lastElementChild);
       }

       gridCreated = false;
    }
    if (noOfGrids > 100 || noOfGrids < 1) {
        return "Error! Number can't be higher 100 or smaller than 1."
    }
    else {
        for (let x = 0; x < noOfGrids; x++) {
            const rowDivContainer = document.createElement('div');
            rowDivContainer.classList.add("row-grid");
            const containerDiv = document.querySelector('.grid-container');
            rowDivContainer.setAttribute('style','display:flex;flex-grow:1');
            containerDiv.appendChild(rowDivContainer);
            for (let i = 0; i < noOfGrids; i++) {
                const createdDivRow = document.createElement('div');
                createdDivRow.classList.add('grid-boxes');
                rowDivContainer.appendChild(createdDivRow);
            }
        }
    }
    gridCreated = true;
}

let slider = document.getElementById("gridSlider");

slider.oninput = function() {

    createGrid(this.value);
}


