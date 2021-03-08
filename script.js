
function redirect(){
    let naam = document.getElementById('login').value;
    //window.location.href = "https://samedpolat.nl/GreenHouse/home.html"
    window.location.href = "home.html"
    console.log("test");
    localStorage.setItem("storage",naam);
}

$('.random').each(function () {
  var x = Math.floor((Math.random() * 80) + 1);
  $(this).text(x)
});

document.getElementById('welkom').innerHTML = " " + (localStorage.getItem("storage"));

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
    $('.sidenav-list-item').toggleClass('color');
    $('.sidenav-list-item').toggleClass('color:hover');
    $('.title-white').toggleClass('color');
    $('.main-header-heading').toggleClass('color');
    $('.main-header-updates').toggleClass('color');
    $('.header__menu').toggleClass('color');
    $('.fa-user-circle').toggleClass('color');
    $('.zoek-tekst').toggleClass('color');
    $('.btn-face').toggleClass('color');
    $('.btn-background').toggleClass('color');
    $('.btn-face').toggleClass('move');
    





})