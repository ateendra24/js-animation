const canvas = document.getElementById('word-canvas');
const c = canvas.getContext('2d');

canvas.width = 1200;
canvas.height = 600;

const inputBox = document.getElementById('word-input');
const startBtn = document.getElementById('start-btn');

let words = [];

class Word {
    constructor(text, x) {
        this.text = text;
        this.x = x;
        this.y = -20;
        this.speed = Math.random() * 2 + 2; 
        this.rotation = 0;
        this.rotationSpeed = Math.random() * 0.03;
        this.stopped = false;
    }

    draw() {
        c.save(); 
        c.translate(this.x, this.y);
        c.rotate(this.rotation); 
        c.font = '48px Cambria'; 
        c.fillStyle = 'black';
        c.fillText(this.text, 0, 0);
        c.restore(); 
    }

    update() {
        if (this.stopped === false) {
            this.y += this.speed; 
            this.rotation += this.rotationSpeed; 
            if (this.y >= canvas.height - 50) { 
                this.y = canvas.height - 50; 
                this.stopped = true;
            }
        }
    }
}

startBtn.addEventListener('click', () => {
    const word = inputBox.value.trim();
    if (word) {
        const randomX = Math.random() * (canvas.width - 100);
        words.push(new Word(word, randomX));
        inputBox.value = ''; 
    }
});

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height); 

    words.forEach(word => {
        word.update();
        word.draw();
    });

    requestAnimationFrame(animate); 
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
