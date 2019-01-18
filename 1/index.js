var ad = document.getElementById('song');
var pb = document.getElementById('prog2');
var pbar = document.getElementById('prog');
var play = false
var mute = false

function pp() {
  if (play == true) {
    ad.pause()
    play = false
  } else {
    ad.play()
    play = true
  }
}

function vol() {
  if (mute == true) {
    ad.volume = 1
    mute = false
  } else {
    ad.volume = 0
    mute = true
  }
}

var progVar = setInterval(prog, 300);

function prog() {
  let durper = ad.currentTime / ad.duration
  let adpx = 340 * durper

  pb.style.width = adpx
}

var bgcolor = setInterval(bgcol, 3000);
 document.body.style.backgroundColor = "pink";

function bgcol() {
  let x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}
