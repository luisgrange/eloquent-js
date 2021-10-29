window.addEventListener(('keydown'), function(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    console.log(audio);
    if(!audio) return; //stop working

    audio.currentTime = 0;
    audio.play();
    key.classList.toggle('playing');


});