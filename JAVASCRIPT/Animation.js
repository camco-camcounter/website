    var textElement;
    var textElements;
    //var teleElement;
    var banElement;
    var banElements;

    var fadeElement;
    var fadeElements;
    
    // Set things up.

    window.addEventListener("load", function(event) {
      textElement = document.querySelectorAll(".testo");
      banElement = document.querySelectorAll(".banner");
      fadeElement = document.querySelectorAll(".fade");
      //teleElement = document.querySelector(".tele");
      
      createObserver();
    }, false);function createObserver() {
    var observerTxt;
    var observerBan;
    var observerFade;
    //var observerTel;
    

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    observerTxt = new IntersectionObserver(handleIntersectT, options);
    observerBan = new IntersectionObserver(handleIntersectB, options);
    observerFade = new IntersectionObserver(handleIntersectF, options);
    
    /*observerTel = new IntersectionObserver((entries) => entries
    .forEach(({target: {classList}, intersectionRatio}) => {
      if(intersectionRatio > 0.1){
        classList.add("activeTele");
      }
    }), options);
    observerTel.observe(teleElement);
    */
   
    // this is the multi fix
    textElement.forEach(textElements => {
      observerTxt.observe(textElements);
    });

    banElement.forEach(banElements => {
      observerBan.observe(banElements);
    });

    fadeElement.forEach(fadeElements => {
      observerFade.observe(fadeElements);
    });

    }
    function handleIntersectT(entries, observerTxt) {
      entries.forEach(({target: {classList}, intersectionRatio})=>
      {
        if(intersectionRatio > 0.5){
          classList.add("active");
        }
      });
    }
    function handleIntersectB(entries, observerBan) {
      entries.forEach(({target: {classList}, intersectionRatio})=>
      {
        if(intersectionRatio > 0.5){
          classList.add("activeBan");
        }
      });
    }
    function handleIntersectF(entries, observerFade) {
      entries.forEach(({target: {classList}, intersectionRatio})=>
      {
        if(intersectionRatio > 0.5){
          classList.add("activeFade");
        }
      });
    }

    var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("fade");
  var dots = document.getElementsByClassName("dot");
  if (n > 2) {slideIndex = 1}
  if (n < 1) {slideIndex = 2}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
