const miscal = new Audio("miscal.wav");
const tunnel = new Audio("tunnel.mp3");
const toph = new Audio("toph.mp3");
const sokka = new Audio("sokka.mp3");
const iroh = new Audio("iroh.mp3");
const cabbage = new Audio("cabbage.mp3");

document.getElementById("miscal")
        .addEventListener('click',
        function () {
        miscal.play();
  });

document.getElementById("tunnel")
    .addEventListener('click',
    function () {
     tunnel.play();
});

document.getElementById("toph")
    .addEventListener('click',
    function () {
     toph.play();
});

document.getElementById("sokka")
    .addEventListener('click',
    function () {
     sokka.play();
});

document.getElementById("iroh")
    .addEventListener('click',
    function () {
     iroh.play();
});

document.getElementById("cabbage")
    .addEventListener('click',
    function () {
     cabbage.play();
});

