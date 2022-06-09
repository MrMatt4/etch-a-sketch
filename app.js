for (let i = 0; i < 15; i++) {
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('grid-boxes');
    const containerDiv = document.querySelector('.grid-container');
    containerDiv.appendChild(createdDiv);
}

