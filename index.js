<<<<<<< HEAD

function calcularValor() {
    var valorConta = document.getElementById('valorConta').value;
    
    if (isNaN(valorConta) || valorConta === "") {
        alert("Por favor, insira um valor válido.");
        return;
    }
    var resultado = parseFloat(valorConta) * 24.55;
    
    document.getElementById('resultado').innerHTML = 'O valor a ser investido é: <strong>R$ ' + resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '</strong>. <br> Este cálculo não é 100% preciso, analise os valores na sua região no botão * Onde Encontro * Abaixo.';
    
}
function buscarEnergiaSolar() {
    var cidade = document.getElementById('cidade').value.trim();

    if (cidade === "") {
        document.getElementById('status').innerText = "Por favor, insira o nome de uma cidade.";
        return;
    }

 
    document.getElementById('status').innerText = `Buscando por energia solar em: ${cidade}`;

 
    var url = `https://www.google.com/maps/search/energia+solar+${encodeURIComponent(cidade)}`;

    window.open(url, '_blank');
}
function toggleCalculator() {
    var calculadoraDiv = document.getElementById('calculadora1');
    

    if (calculadoraDiv.classList.contains('hidden')) {
        calculadoraDiv.classList.remove('hidden');
        calculadoraDiv.classList.add('visible');
    } else {
        calculadoraDiv.classList.remove('visible');
        calculadoraDiv.classList.add('hidden');
    }
}
const elemento = document.getElementById('calculadora');

elemento.addEventListener('click', () => {
   toggleCalculator();
});

const elemento2 = document.getElementById('onde');
function toggleondeencontrar() {
    var ondeencontrarDiv = document.getElementById('onde1');

    if (ondeencontrarDiv.classList.contains('hidden')) {
        ondeencontrarDiv.classList.remove('hidden');
        ondeencontrarDiv.classList.add('visible');
    } else {
        ondeencontrarDiv.classList.remove('visible');
        ondeencontrarDiv.classList.add('hidden');
    }
}
elemento2.addEventListener('click', () => {
    toggleondeencontrar();
});

const elemento3 = document.getElementById('video');
function toggleVideo() {
    var videoDiv = document.getElementById('video1');
    
    // Alterna entre 'hidden' e 'visible'
    if (videoDiv.classList.contains('hidden')) {
        videoDiv.classList.remove('hidden');
        videoDiv.classList.add('visible');
    } else {
        videoDiv.classList.remove('visible');
        videoDiv.classList.add('hidden');
    }
}
elemento3.addEventListener('click', () => {
   toggleVideo();   
});

const elemento4 = document.getElementById('evo');
function toggleevo1() {
    var evodiv = document.getElementById('evo1');
    
    // Alterna entre 'hidden' e 'visible'
    if (evodiv.classList.contains('hidden')) {
        evodiv.classList.remove('hidden');
        evodiv.classList.add('visible');
    } else {
        evodiv.classList.remove('visible');
        evodiv.classList.add('hidden');
    }
}
elemento4.addEventListener('click', () => {
   toggleevo1(); 
});
const elemento5 = document.getElementById('vantagens');
function togglevantagens1() {
    var vantagensdiv = document.getElementById('vantagens1');
    
    // Alterna entre 'hidden' e 'visible'
    if (vantagensdiv.classList.contains('hidden')) {
        vantagensdiv.classList.remove('hidden');
        vantagensdiv.classList.add('visible');
    } else {
        vantagensdiv.classList.remove('visible');
        vantagensdiv.classList.add('hidden');
    }
}
elemento5.addEventListener('click', () => {
   togglevantagens1(); 
});
const elemento6 = document.getElementById('quemsomos');
function togglequemsomos1() {
    var quemsomosdiv = document.getElementById('quemsomos1');
    
    // Alterna entre 'hidden' e 'visible'
    if (quemsomosdiv.classList.contains('hidden')) {
        quemsomosdiv.classList.remove('hidden');
        quemsomosdiv.classList.add('visible');
    } else {
        quemsomosdiv.classList.remove('visible');
        quemsomosdiv.classList.add('hidden');
    }
}
elemento6.addEventListener('click', () => {
   togglequemsomos1(); 
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slides img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

function changeSlide(n) {
    slideIndex += n;
    let slides = document.querySelectorAll('.slides img');
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
}
=======

function calcularValor() {
    var valorConta = document.getElementById('valorConta').value;
    
    if (isNaN(valorConta) || valorConta === "") {
        alert("Por favor, insira um valor válido.");
        return;
    }
    var resultado = parseFloat(valorConta) * 44;
    
    document.getElementById('resultado').innerText = 'O valor a ser investido é: R$ ' + resultado.toFixed(2);
}
function buscarEnergiaSolar() {
    var cidade = document.getElementById('cidade').value.trim();

    if (cidade === "") {
        document.getElementById('status').innerText = "Por favor, insira o nome de uma cidade.";
        return;
    }

 
    document.getElementById('status').innerText = `Buscando por energia solar em: ${cidade}`;

 
    var url = `https://www.google.com/maps/search/energia+solar+${encodeURIComponent(cidade)}`;

    window.open(url, '_blank');
}
function toggleCalculator() {
    var calculadoraDiv = document.getElementById('calculadora1');
    

    if (calculadoraDiv.classList.contains('hidden')) {
        calculadoraDiv.classList.remove('hidden');
        calculadoraDiv.classList.add('visible');
    } else {
        calculadoraDiv.classList.remove('visible');
        calculadoraDiv.classList.add('hidden');
    }
}
const elemento = document.getElementById('calculadora');

elemento.addEventListener('click', () => {
   toggleCalculator();
});

const elemento2 = document.getElementById('onde');
function toggleondeencontrar() {
    var ondeencontrarDiv = document.getElementById('onde1');

    if (ondeencontrarDiv.classList.contains('hidden')) {
        ondeencontrarDiv.classList.remove('hidden');
        ondeencontrarDiv.classList.add('visible');
    } else {
        ondeencontrarDiv.classList.remove('visible');
        ondeencontrarDiv.classList.add('hidden');
    }
}
elemento2.addEventListener('click', () => {
    toggleondeencontrar();
});

const elemento3 = document.getElementById('video');
function toggleVideo() {
    var videoDiv = document.getElementById('video1');
    
    // Alterna entre 'hidden' e 'visible'
    if (videoDiv.classList.contains('hidden')) {
        videoDiv.classList.remove('hidden');
        videoDiv.classList.add('visible');
    } else {
        videoDiv.classList.remove('visible');
        videoDiv.classList.add('hidden');
    }
}
elemento3.addEventListener('click', () => {
   toggleVideo();   
});

const elemento4 = document.getElementById('evo');
function toggleevo1() {
    var evodiv = document.getElementById('evo1');
    
    // Alterna entre 'hidden' e 'visible'
    if (evodiv.classList.contains('hidden')) {
        evodiv.classList.remove('hidden');
        evodiv.classList.add('visible');
    } else {
        evodiv.classList.remove('visible');
        evodiv.classList.add('hidden');
    }
}
elemento4.addEventListener('click', () => {
   toggleevo1(); 
});
const elemento5 = document.getElementById('vantagens');
function togglevantagens1() {
    var vantagensdiv = document.getElementById('vantagens1');
    
    // Alterna entre 'hidden' e 'visible'
    if (vantagensdiv.classList.contains('hidden')) {
        vantagensdiv.classList.remove('hidden');
        vantagensdiv.classList.add('visible');
    } else {
        vantagensdiv.classList.remove('visible');
        vantagensdiv.classList.add('hidden');
    }
}
elemento5.addEventListener('click', () => {
   togglevantagens1(); 
});
const elemento6 = document.getElementById('quemsomos');
function togglequemsomos1() {
    var quemsomosdiv = document.getElementById('quemsomos1');
    
    // Alterna entre 'hidden' e 'visible'
    if (quemsomosdiv.classList.contains('hidden')) {
        quemsomosdiv.classList.remove('hidden');
        quemsomosdiv.classList.add('visible');
    } else {
        quemsomosdiv.classList.remove('visible');
        quemsomosdiv.classList.add('hidden');
    }
}
elemento6.addEventListener('click', () => {
   togglequemsomos1(); 
});
>>>>>>> 907071858e06c674e80db3945ee40eeeebdb3b97
