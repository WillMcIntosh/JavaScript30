# JavaScript 30 Projects

### 1. JavaScript Drum Kit

Using provided HTML, CSS, and sounds, followed along to create a drum kit by using an even listener for keystrokes using
[keycode website](http://keycode.info/) to determine keycodes for the home row. When the key is pressed, the function checks if audio is associated with that key and plays the audio. The style of the "key" is briefly changed using a 'transitionend' event listener to remove the CSS class using .classList.remove

### 2. JS and CSS clock

Using the provided index.html file, followed along and learned some CSS tips to transition and rotate objects, including 
`transform-origin: 100%` to move the point at which the object (in this case the clock hands) rotates about. By default this is the center (50%), and changing the value to 100% moves the origin all the way to the right. After following along with the second hand JavaScript code, I paused and did the minutes and hours by myself. I also added some if statements to prevent the hands from jumping all over the place when they moved from the 12:00 position onward.
