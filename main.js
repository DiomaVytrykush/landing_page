$(function(){

  $('.navigation__btn').on('click', function(){
    $('.navigation__navbar li').slideToggle();
  });

});

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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
};

var boxes = document.getElementsByClassName("buying__box");

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", changeBox);
  function changeBox() {
    var currentBox = document.getElementsByClassName("active-box");
    currentBox[0].className = currentBox[0].className.replace("active-box", " ");
    this.className += " active-box";
  };
};

var links = document.getElementsByClassName("link");

for (var j = 0; j < links.length; j++) {
  links[j].addEventListener("click", changeLink);
  function changeLink() {
    var currentLink = document.getElementsByClassName("active-link");
    currentLink[0].className = currentLink[0].className.replace("active-link", " ");
    this.className += " active-link";
  };
};



