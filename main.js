function play(sound){
    const audio = document.getElementById("audio");
          audio.setAttribute('src', sound);
          audio.play();
 }

// function playNote(n){
//     const note = document.querySelector(`audio[data-key="${n.keyCode}"]`);
//           note.play();
 
//}


function playNote(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
          key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!key) return;

    key.classList.add('playing'); 
    audio.currentTime = 0;
    audio.play(); 
}
window.addEventListener('keydown', playNote);
