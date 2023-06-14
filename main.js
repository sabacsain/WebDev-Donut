$(document).ready(function() {
    $(window).scroll( function(){
        $(document).ready(function () {
            $("#quote").fadeToggle(3000);
		});
    });
});

$(".card-img-top").mousemove(function(event){
  
    var mousex = event.pageX - $(this).offset().left;
    var mousey = event.pageY - $(this).offset().top;
    
    
    var imgx = (mousex - 300) / 40;
    var imgy = (mousey - 200) / 40;
    
    $(this).css("transform", "translate(" + imgx + "px," + imgy + "px)");
  });
  
  $(".card-img-top").mouseout(function(){
    $(this).css("transform", "translate(0px,0px)");
  });

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
  reset: false
});

ScrollReveal().reveal(".quote1", {
  duration: 3000,
  origin: "top",
  distance: "400px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    z: -10
  }
});
ScrollReveal().reveal(".card-img-top1", {
    delay: 500,
  duration: 2000,
  rotate: {
    x: 20,
    z: 20
  }
  });

ScrollReveal().reveal(".card-img-top2", {
    duration: 4000,
    scale: 0.85
});

ScrollReveal().reveal(".card-img-top3", {
    duration: 3000,
    origin: "left",
    distance: "300px",
    easing: "ease-in-out"
});
//back to top//
var btn = $('#backToTop');
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});
  