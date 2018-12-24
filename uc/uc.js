var sp = document.getElementById('span');
var inp1 = document.getElementById('inp1');
var inp2 = document.getElementById('inp2');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');

btn1.addEventListener('click', function() {
  decstr = parseInt(inp1.value, 16).toString(10);
  sp.innerHTML = '&#'+decstr;
})

btn2.addEventListener('click', function() {
  sp.innerHTML = '&#'+inp2.value;
})
