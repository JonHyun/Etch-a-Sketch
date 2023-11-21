
// Creates initial main parent gird with HTML div tag

let mainDiv = document.createElement('div');
    mainDiv.style.width = '500px';
    mainDiv.style.height = '500px';
    mainDiv.style.display = 'grid';
    mainDiv.id = 'divId';
    mainDiv.style.gridTemplateColumns = 'repeat(8, 1fr)';

    let addMain = document.getElementById('main');
    addMain.appendChild(mainDiv);

// Creates 64 grids and appends within mainDiv

for (let i = 1; i <= 64; i++) {

    let gridDiv = document.createElement('div');

    gridDiv.classList.add('grid');
    gridDiv.style.backgroundColor = 'white';
    gridDiv.style.width = '45px';
    gridDiv.style.height = '45px';
    gridDiv.style.border = '1px solid #000';
    gridDiv.style.display = 'grid';
    gridDiv.style.margin = '5px 5px';

 let mouseHover = () => {
        gridDiv.style.backgroundColor = 'black';
    };

    gridDiv.onmouseover = mouseHover;
    
    mainDiv.appendChild(gridDiv);
}  
    

// Clears the grid

let clearGrid = document.querySelector('.clearBtn');

function resetGrid () {
    for (let j = 0; j < mainDiv.children.length; j++) {
        if (mainDiv.children[j].style.backgroundColor === 'black') {
            mainDiv.children[j].style.backgroundColor = 'white';
        }
    }
}

clearGrid.addEventListener('click', function() {
   resetGrid();
});
