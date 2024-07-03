let count = 0;

document.getElementById('enterButton').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;
    if (name && localStorage.getItem(name) !== null) {
        count = parseInt(localStorage.getItem(name));
    } else {
        count = 0;
    }
    document.getElementById('counter').textContent = count;
});

document.getElementById('countButton').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;
    if (name) {
        count++;
        document.getElementById('counter').textContent = count;
        localStorage.setItem(name, count);
    } else {
        alert('Please enter your name and press Enter.');
    }
});

document.getElementById('resetButton').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;
    if (name) {
        count = 0;
        document.getElementById('counter').textContent = count;
        localStorage.setItem(name, count);
    } else {
        alert('Please enter your name and press Enter.');
    }
});
