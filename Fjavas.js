function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

  let slideIndexx = 1;
showSlidess(slideIndexx);


function plusSlidess(n) {
  showSlidess(slideIndexx += n);
}


function currentSlidee(n) {
  showSlidess(slideIndexx = n);
}

function showSlidess(n) {
  let ii;
  let slidess = document.getElementsByClassName("mySlidess");
  let dotss = document.getElementsByClassName("dot");
  if (n > slidess.length) {slideIndexx = 1}
  if (n < 1) {slideIndexx = slidess.length}
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";
  }
  for (i = 0; i < dotss.length; i++) {
    dotss[i].className = dotss[i].className.replace(" active", "");
  }
  slidess[slideIndexx-1].style.display = "block";
  dotss[slideIndexx-1].className += " active";
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}


