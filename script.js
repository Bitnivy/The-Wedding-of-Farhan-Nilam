document.addEventListener('click', function() {
        let audio = document.querySelector("audio");
        audio.muted = false;
        audio.play();
    });

document.getElementById('opn').addEventListener('click', function() {
  document.getElementById('cover').style.display = 'none';
});
let tombolA = document.getElementById('opn');
let tombolB = document.getElementById('tombolB');
let tombolC = document.getElementById('tombolC');
let tombolD = document.getElementById('tombolD');
let elemenA = document.getElementById('a');
let elemenB = document.getElementById('b');
let elemenC = document.getElementById('elemenC');
let elemenD = document.getElementById('elemenD');
opn.addEventListener('click', function() {
  a.style.display = 'none';
  b.style.display = 'block';
  elemenD.style.display = 'none';
  elemenA.style.display = 'none';
  b.classList.add('animate-bounce'); 
  setTimeout(function() {
    b.classList.remove('animate-bounce');
  }, 800);
});
tombolB.addEventListener('click', function() {
  elemenA.style.display = 'none';
  elemenC.style.display = 'none';
  elemenD.style.display = 'none';
  elemenB.style.display = 'block';
});
tombolC.addEventListener('click', function() {
  elemenA.style.display = 'none';
  elemenB.style.display = 'none';
  elemenD.style.display = 'none';
  elemenC.style.display = 'block';
});
tombolD.addEventListener('click', function() {
  elemenA.style.display = 'none';
  elemenB.style.display = 'none';
  elemenC.style.display = 'none';
  elemenD.style.display = 'block';
});