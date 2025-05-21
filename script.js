document.addEventListener('click', function() {
        let audio = document.querySelector("audio");
        audio.muted = false;
        audio.play();
    });

document.getElementById('okee').addEventListener('click', function() {
  document.getElementById('cover').style.display = 'none';
});
