// scripts.js
window.onload = function() {

var buttonElements = document.getElementsByTagName('button');

//console.log(buttonElements);

for (var i = 0; i < buttonElements.length; i++) {

var buttonText = buttonElements[i].innerText;

var myAlert = alert('text from button: ' + buttonText);

}

}
