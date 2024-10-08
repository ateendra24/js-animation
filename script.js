const canvas = document.getElementById('word-canvas');
const c = canvas.getContext('2d');

canvas.width = 1200;
canvas.height = 600;

const inputBox = document.getElementById('word-input');
const startBtn = document.getElementById('start-btn');

let words = [];

