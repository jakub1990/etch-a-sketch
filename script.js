const grid = document.querySelector('.grid');
const resetBtn = document.querySelector('.reset');
const createBtn = document.querySelector('.create');

function createGrid() {
    const gridCounter = prompt('How many columns and rows?');
    if(gridCounter > 100) {
        alert('You inserted too big number- only up to 100 is allowed!');
        return;
    }
    for(let column = 0; column < gridCounter; column++){
        for(let row = 0; row < gridCounter; row++) {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('item');
            grid.appendChild(rowDiv);
        }
    }
    grid.style.display = `grid`;
    grid.style.gridTemplateColumns = `repeat(${gridCounter}, ${1000/gridCounter}px)`;
    grid.style.gridTemplateRows = `repeat(${gridCounter}, ${1000/gridCounter}px)`;
    const squares = document.querySelectorAll('.item');

squares.forEach(square => {
  square.addEventListener('mouseenter', function() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color = `${r},${g},${b}`;
    square.style.backgroundColor = `rgb(${color})`;

  });
});

}




resetBtn.addEventListener('click', function(){
  grid.innerHTML = '';
});

createBtn.addEventListener('click', createGrid);

