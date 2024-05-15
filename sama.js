let index = 1;
displaySlides(index);

function moveSlides(n){
  displaySlides(index += n);
}

function presentSlide(n){
  displaySlides(index = n);
}
function displaySlides(n){
  let i;
  let myslides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("demo");
  let capText = document.getElementById("caption");

  if(n > myslides.length){
    index = 1;
  }
  if(n < 1){
    index = myslides.length;
  }

  for(i = 0; i < myslides.length; i++){
    myslides[i].style.display = "none";
  }

  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" .active", "")
  }

  myslides[index - 1].style.display = "block";
  dots[index - 1].className += "active";
  capText.innerHTML = dots[index - 1].alt

}
