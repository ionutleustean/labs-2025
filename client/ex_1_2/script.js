

let color = 'black';

(function init() {
    const canvas = document.getElementById("canvas")
    console.log(canvas);

    const rows = 100;
    const columns = 100;

    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;

    const cellWidth = canvasWidth / columns;
    const cellHeight = canvasHeight / rows;

    console.log(cellWidth, " ", cellHeight);

    const fragmant = document.createDocumentFragment();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const el = document.createElement('div');
            el.style.background = '#f3f3f3'
            el.style.width = cellWidth - 2 + 'px';
            el.style.height = cellHeight - 2 + 'px';
            el.style.border = '1px solid #ababab';
            fragmant.appendChild(el);
        }
    }

    canvas.appendChild(fragmant);

    let isPressed = false

    canvas.addEventListener('mousedown', (event) => {
        isPressed = true;
    })

    canvas.addEventListener('mouseover', (event) => {
        if (isPressed) {
            event.target.style.background = color;
        }
    })

    canvas.addEventListener('mouseup', (event) => {
        isPressed = false;
    })

    canvas.addEventListener('mouseleave', (event) => {
        isPressed = false;
    })

})()





