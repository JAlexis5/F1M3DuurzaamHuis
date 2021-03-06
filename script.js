
function redirect(){
    let naam = document.getElementById('login').value;
    window.location.href = "https://samedpolat.nl/GreenHouse/home.html"
    console.log("test");
    localStorage.setItem("storage",naam);
}

document.getElementById('welkom').innerHTML = "Welkom, " + (localStorage.getItem("storage"));

const menuIconEl = $('.menu-icon');
const sidenavEl = $('.side-nav');
const sidenavCloseEl = $('.sidenav-close-icon');

function toggleClassName(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

menuIconEl.on('click', function() {
  toggleClassName(sidenavEl, 'active');
});

sidenavCloseEl.on('click', function() {
  toggleClassName(sidenavEl, 'active');
});

$('.btn-background').on('click', function () {
    $('.header').toggleClass('color');
    $('.main').toggleClass('color');
    $('.side-nav').toggleClass('color');
    $('.widget').toggleClass('color');
    $('.footer').toggleClass('color');
    $('.zoeken').toggleClass('color');
    $('.btn-face').toggleClass('move');
    





})