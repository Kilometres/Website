var credit = document.getElementById('credit');
var box = document.getElementById('box');

function cred() {
  credit.innerHTML = box.value;
}

function editPage() {
  document.body.contentEditable = true;
}

function cancelEditPage() {
  document.body.contentEditable = false;
}
