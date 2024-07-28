document.addEventListener('DOMContentLoaded', function() {
    const rosesContainer = document.getElementById('rosesContainer');

    const colors = ['#FF007F', '#FF1493', '#FF69B4', '#FF6347', '#FF4500'];
    rosesContainer.innerHTML = '';

    for (let i = 0; i < colors.length; i++) {
        const col = document.createElement('div');
        col.classList.add('col-12', 'col-md-6', 'col-lg-4', 'd-flex', 'justify-content-center');

        const rose = document.createElement('div');
        rose.classList.add('rose');
        rose.style.setProperty('--color', colors[i]);

        for (let j = 0; j < 6; j++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            rose.appendChild(petal);
        }

        for (let k = 0; k < 2; k++) {
            const leaf = document.createElement('div');
            leaf.classList.add('leaf');
            rose.appendChild(leaf);
        }

        col.appendChild(rose);
        rosesContainer.appendChild(col);
    }
});
