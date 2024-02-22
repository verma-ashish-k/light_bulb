let switchBtn = document.querySelector('.btn');
let body = document.body;
let audioOn = document.getElementById('audioOn');
let audioOff = document.getElementById('audioOff');
let creatureSounds = document.getElementById('creatureSounds');

function toggleBulb() {
  if (body.classList.contains('on')) {
    body.classList.remove('on'); // Remove the 'on' class for the light off
    audioOff.play();
    creatureSounds.play();
  } else {
    body.classList.add('on'); // Add the 'on' class for the light on
    audioOn.play();
    creatureSounds.pause();
    creatureSounds.currentTime = 0;
  }
}

// Change the event listener to 'mousedown' instead of 'click'
switchBtn.addEventListener('mousedown', toggleBulb);

// Add event listener for 'keydown' on the document
document.addEventListener('keydown', function (event) {
  // Check if the pressed key is the spacebar (key code 32)
  if (event.keyCode === 32) {
    toggleBulb();
  }
});
