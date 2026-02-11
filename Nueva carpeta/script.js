const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const chiikawaImg = document.getElementById('chiikawa-img');
const question = document.getElementById('question');

let fontSize = 1.2; // Tamaño inicial del texto
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const chiikawaImg = document.getElementById('chiikawa-img');
const question = document.getElementById('question');

let fontSize = 1.2; 
let paddingX = 30;  
let paddingY = 15;  

const phrases = [
    "No",
    "¿Estás segura? 🥺",
    "¡Piénsalo de nuevo!",
    "¡Mira qué grande es el SÍ!",
    "No me hagas esto 😭",
    "¡Di que SÍ!"
];

let phraseIndex = 0;

noBtn.addEventListener('click', () => {
    // 1. Crecimiento del botón
    fontSize += 0.5;
    paddingX += 10;
    paddingY += 5;
    
    yesBtn.style.fontSize = `${fontSize}rem`;
    yesBtn.style.padding = `${paddingY}px ${paddingX}px`;

    // 2. Frases del botón No
    phraseIndex = (phraseIndex + 1) % phrases.length;
    noBtn.innerText = phrases[phraseIndex];
});

yesBtn.addEventListener('click', () => {
    // CAMBIO AQUÍ: El mensaje que pediste
    question.innerText = "sabia q dirias q si ❤️";
    
    // CAMBIO AQUÍ: La imagen final.png
    chiikawaImg.src = "final.png"; 
    
    // Limpieza de pantalla para que se vea bonito
    document.querySelector('.btn-container').style.display = 'none';
});