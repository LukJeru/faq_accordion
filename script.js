document.getElementById("first_button").onclick = myFunction;

function myFunction() {
  if (document.getElementById("first_button").getAttribute('src') == "assets/images/icon-minus.svg") {
    document.getElementById("first_button").src="assets/images/icon-plus.svg"
  } else {
    document.getElementById("first_button").src="assets/images/icon-minus.svg"
  }
}
