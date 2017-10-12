
function playSound(e) {
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(key);

    if(!audio) return; //stop the function from running if no audo associated
    audio.currentTime = 0; // rewind to start when pressed again 
    audio.play();
    key.classList.add('playing');
    // rather than use setTimeout and get out of sync if 
    // transition is changed in CSS, use transition end even
    
}
function removeTransition(e){
    if(e.propertyName != 'transform') return; // skip if not the transform
    // console.log(e.propertyName);
    //
    // this is equal to what got called against it. addEventListener got 
    // called, and it was called on key, so this is equal to the key
    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
// listen for the transition end even. Can also listen for animation end
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
