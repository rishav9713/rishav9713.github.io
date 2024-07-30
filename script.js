const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(0);

const characters = "アニメーションディテールかきくけこサシスセソ";
const charArray = characters.split('');

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 33);

window.onload = function() {
    setTimeout(function() {
        alert("Warning! You have entered a restricted Wi-Fi zone. Leave immediately!");
    }, 1000);
    showErrorPopup();
};

function showErrorPopup() {
    const popup = document.getElementById('error-popup');
    popup.style.display = 'block';
    setTimeout(function() {
        popup.style.display = 'none';
        setTimeout(showErrorPopup, 1000);
    }, 1000);
}

window.onresize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
