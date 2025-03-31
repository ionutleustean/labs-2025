color = "#000000";

function paint(rows, cols) {

    const canvas = document.getElementById('canvas');

    let inCLickPressed = false

    canvas.addEventListener('pointerdown', (event) => {
        inCLickPressed = true;
    })

    canvas.addEventListener('pointerup', (event) => {
        inCLickPressed = false;
    })

    canvas.addEventListener('mouseleave', (event) => {
        inCLickPressed = false;
    })

    canvas.addEventListener('mouseover', (event) => {
        if(inCLickPressed) {
            event.target.style.background = color;
        }
    })

    const cellWidth = canvas.offsetWidth / cols;
    const cellHeight = canvas.offsetHeight / rows;


    const fragment = document.createDocumentFragment();

    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            const el = document.createElement('div');
            el.style.width = (cellWidth - 2) + 'px';
            el.style.height = (cellHeight - 2) + 'px';
            el.style.border = '1px solid #353434';
            el.style.background = 'lightgrey';
            fragment.appendChild(el);
        }
    }

    canvas.appendChild(fragment);

}

paint(100, 100);


function changeColor (c) {
    color = c;
}