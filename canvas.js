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

function Circle(x, y, dx, dy, radius, ax, ay) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.rad = radius;
  this.ax = ax;
  this.ay = ay;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
    c.strokeStyle = "#007fff";
    c.stroke();
  }

  this.update = function() {

    this.x += this.dx;
    this.dx += this.ax;

    if (this.x + this.rad > innerWidth || this.x - this.rad < 0) {
      this.dx = -this.dx;
    }


    if (this.y + this.rad > innerHeight  || this.y - this.rad < 0) {
      this.dy = -this.dy;
    }

    this.y += this.dy;
    this.dy += this.ay;

    this.draw();
  }
}

var circArray = [];

for (let i = 0; i < 10; i++) {
  var rad = 40;
  var x = Math.random() * (window.innerWidth - rad * 2) + rad;
  var dx = (Math.random() - 0.5) * 16;
  var ax = 0;
  var y = Math.random() * (window.innerHeight - rad * 2) + rad;
  var dy = (Math.random() - 0.5) * 16;
  var ay = 0;

  circArray.push(new Circle(x, y, dx, dy, rad, ax, ay));
}

var circ = new Circle(200, 200, 3, 3, 40, 0, 0);
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < 10; i++) {
    circArray[i].update();
  }
}

animate();
