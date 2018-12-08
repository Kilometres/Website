var canv = document.querySelector('canvas');

//fit canvas to screen
canv.width = window.innerWidth;
canv.height = window.innerHeight;

var c = canv.getContext('2d');

//rectangle
// c.fillStyle = "#007fff";
// c.fillRect(200, 200 ,100 ,100);

//line
// c.beginPath();
// c.moveTo(10, 0);
// c.lineTo(200, 150);
// c.lineTo(200, 20);
// c.lineTo(400, 150);
// c.strokeStyle = "red";
// c.stroke();

//arc / circle
// c.beginPath();
// c.arc(500, 250, 50, 0, Math.PI * 2, false);
// c.strokeStyle = "#007fff";
// c.stroke();

//random circles
// for (let i = 0; i < 20; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   let r = Math.random() * 100;
//
//   function rand(num) {
//     let col = Math.random() * num;
//     return col;
//   }
//
//   function randCol() {
//     cols = ["red", "green", "blue", "#007fff", "black"];
//     let randFromColList = Math.floor(rand(5));
//     return cols[randFromColList]
//   }
//
//   c.beginPath();
//   c.arc(x, y, r, 0, Math.PI * 2, false);
//   c.strokeStyle = randCol();;
//   c.stroke();
// }

// Code for values
// var x = Math.random() * window.innerWidth;
// var dx = (Math.random() - 0.5) * 16;
// var ax = 0;
// // use "var dx = 5.001;" not "var dx = 5;" or any closer to 5
// var y = Math.random() * window.innerHeight;
// var dy = (Math.random() - 0.5) * 16;
// var ay = 0;
// var rad = 40;

var mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener("resize", function(event) {
  canv.width = window.innerWidth;
  canv.height = window.innerHeight;

  init();
})

var  colors = ["#ff5733", "#2ecc71", "#007fff", "#1b2631"];

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.rad = radius;
  this.minRad = radius;
  this.col = colors[Math.floor(Math.random()*colors.length)];

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
    c.fillStyle = this.col;
    c.fill();
  }

  this.update = function() {

    this.x += this.dx;

    if (this.x + this.rad > innerWidth || this.x - this.rad < 0) {
      this.dx = -this.dx;
    }


    if (this.y + this.rad > innerHeight  || this.y - this.rad < 0) {
      this.dy = -this.dy;
    }

    this.y += this.dy;

    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.rad < 40) {
        this.rad += 3;
      }
    } else if (this.rad > this.minRad) {
      this.rad -= 1;
    }

    this.draw();
  }
}

var circArray = [];

function init() {
  circArray = [];

  for (let i = 0; i < 800; i++) {
    var rad = Math.random() * 19 + 1;
    var x = Math.random() * (window.innerWidth - rad * 2) + rad;
    var dx = (Math.random() - 0.5) * 8;
    var y = Math.random() * (window.innerHeight - rad * 2) + rad;
    var dy = (Math.random() - 0.5) * 8;

    circArray.push(new Circle(x, y, dx, dy, rad));
  }
}

init();

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circArray.length; i++) {
    circArray[i].update();
  }
}

animate();
