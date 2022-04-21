$(document).ready(function () {
   $('.owl-carousel').owlCarousel({
       responsive: {
            300:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            900:{
                items: 3,
                nav: false
            },
            1200:{
                items: 4,
                nav: false
            },  
       }
   })
});

const navbar = {
    button: "",
    nav: document.querySelector(".main-nav"),
};

const schedule = {
    buttons: document.querySelectorAll(".schedule-nav a"),
    days: document.querySelectorAll(".schedule-day"),
 };

 function hideDays() {
    schedule.days.forEach((elm) => {
         elm.classList.remove("active");
     });
    schedule.buttons.forEach((elm) => {
         elm.classList.remove("active");
     });
}

 schedule.buttons.forEach(function (elm, i) {
    elm.onclick = function () {
        hideDays();
        elm.classList.add("active");
        schedule.days[i].classList.add("active");
 };
});


function scrollHandler (e) {
    if (window.pageYOffset > 300) navbar.nav.classList.add("fixed"); 
    else navbar.nav.classList.remove("fixed");                    
}                      
document.onscroll = scrollHandler;

scrollHandler ();

function openForm() {
    document.getElementById("regestration").classList.add("open");
    }
function closeForm() {
    document.getElementById("regestration").classList.remove("open");
    }


    const elm = document.getElementById("Nav-Elm");
    const elm2 = document.getElementById('Menu');
    elm2.addEventListener('click', function(){
        (elm.style.visibility == "visible") ? elm.style.visibility = "hidden" : elm.style.visibility = "visible";  
        
        
    })


//Get the button:
mybutton = document.getElementById("Btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
}