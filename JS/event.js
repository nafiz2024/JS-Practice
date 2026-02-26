/* function changeBgColor() {
    const btn = document.querySelector('button');
    btn.style.backgroundColor = 'lightblue';
}

function makeBgRed() {
    document.body.style.backgroundColor = 'red';
}

function makeBgGreen() {
    document.body.style.backgroundColor = 'green';
}

function makeBgWhite() {
    const btn = document.querySelector('button');
    btn.style.backgroundColor = 'white';
} */

    document.getElementById('colorChangeBtn').addEventListener('click', function() {
        const btn = document.querySelector('button');
        btn.style.backgroundColor = 'lightblue';
    });

    document.getElementById('makeBgRedBtn').addEventListener('click', function() {
        document.body.style.backgroundColor = 'red';
    });

