$(document).ready(function () {
    // if (document.documentElement.clientWidth < 500) {
    //     $(".owl-carousel").owlCarousel({items:1,nav:true});
    // } else if ((document.documentElement.clientWidth >= 501) && (document.documentElement.clientWidth < 700)) {
    //      $(".owl-carousel").owlCarousel({items:2,nav:true});
    // } else {
        $(".owl-carousel").owlCarousel({items:4,nav:true});
    // }
   
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


