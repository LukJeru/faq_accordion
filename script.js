const headings = document.querySelectorAll('.subheading');

headings.forEach(item => {
  item.addEventListener("click", function handleClick(event) {
    if (event.target.getAttribute('src') == "assets/images/icon-minus.svg") {
      event.target.src="assets/images/icon-plus.svg";
      event.target.parentElement.style.border ="";
      event.target.parentElement.nextElementSibling.style.display = "none";
    } else {
      headings.forEach(element=> {
        element.children[1].src="assets/images/icon-plus.svg";
        element.nextElementSibling.style.display = "none";
        element.style.border ="";
      })
      event.target.src="assets/images/icon-minus.svg";
      event.target.parentElement.style.border ="none";
      event.target.parentElement.nextElementSibling.style.display = "inline-block";
    }
  });
});
