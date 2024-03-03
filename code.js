const container = document.querySelector('#grid');

for (let i = 0; i < 256; i++) {
    const gridBox = document.createElement('div');
    gridBox.style.height = '20px';
    gridBox.style.width = '20px';
    gridBox.style.backgroundColor = ('black');
    gridBox.addEventListener('mouseover', function (e) {
        const randomColor = getRandomColor();
        e.target.style.background = randomColor;
    });
    container.appendChild(gridBox);
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random red value between 0 and 255
    const g = Math.floor(Math.random() * 256); // Random green value between 0 and 255
    const b = Math.floor(Math.random() * 256); // Random blue value between 0 and 255
    return `rgb(${r},${g},${b})`;
}
