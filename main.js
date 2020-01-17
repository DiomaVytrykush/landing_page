var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("sliders");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
};


var wrap = document.getElementsByClassName("buying__wrap");
var boxes = document.getElementsByClassName("buying__box");

for (var j = 0; j < boxes.length; j++) {
  boxes[j].addEventListener("click", function() {
    var currentBox = document.getElementsByClassName("active-box");
    currentBox[0].className = currentBox[0].className.replace(" active-box", "");
    this.className += " active-box";
  });
}

