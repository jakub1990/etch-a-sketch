const grid = document.querySelector('.grid');

for(let column = 0; column < 16; column++){
    const columnDiv = document.createElement('div');
    grid.appendChild(columnDiv);
    for(let row = 0; row < 16; row++) {
        const rowDiv = document.createElement('div');
        grid.appendChild(rowDiv);
    }
}