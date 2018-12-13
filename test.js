function newproj(name, pronum, img, adr) {
  return(`<h1 class="pronam"><a href="`+adr+`">`+name+`</a></h1>
  <p class="art">
    Project-`+pronum+`<br><br>
    Using the 'onclick' attribute on anchor '&lt;a&gt;' tags to set the color of the body in JS.
  </p>
  <a href="`+adr+`"><img src="`+img+`" width="550"></img></a>`)
}

function newversion(ver, date, name, pronum, adr) {
  return (`<p class="article-1">
    <br><br>
    Version #: `+ver+`
    <br><br>
    Version Date: `+date+`
    <br><br>
    Changelog (For update `+ver+`):
    <ul>
      <li class="change">Added Project-`+pronum+` onto <a href="project.html">'Projects'</a>, titled <a href="`+adr+`">'`+name+`'</a></li>
    </ul>
  </p>`)
}

function both(ver, date, name, pronum, adr, img) {
  newproj(name, pronum, img, adr);
  newversion(ver, date, name, pronum, adr);
}

function both2() {
  var ver = document.getElementById('ver');
  var dat = document.getElementById('dat');
  var nam = document.getElementById('nam');
  var prn = document.getElementById('prn');
  var adr = document.getElementById('adr');
  var img = document.getElementById('img');

  console.log(both(ver, dat, nam, prn, adr, img));;
}
