
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
    $('.body').toggleClass('color');
    $('.header').toggleClass('color');
    $('.main').toggleClass('color');
    $('.side-nav').toggleClass('color');
    $('.widget').toggleClass('color');
    $('.footer').toggleClass('color');
    $('.zoeken').toggleClass('color');
    $('.sidenav-list-item').toggleClass('color');
    $('.card').toggleClass('color');
    $('.overviewcard').toggleClass('color');
    $('.sidenav-list-item').toggleClass('color:hover');
    $('.title-white').toggleClass('color');
    $('.main-header-heading').toggleClass('color');
    $('.main-header-updates').toggleClass('color');
    $('.header__menu').toggleClass('color');
    $('.menu-icon').toggleClass('color');
    $('.fa-user-circle').toggleClass('color');
    $('.zoek-tekst').toggleClass('color');
    $('.btn-face').toggleClass('color');
    $('.btn-background').toggleClass('color');
    $('.btn-face').toggleClass('move');
    $('.fa-github').toggleClass('color');
  
})

music_name = "../files/sky.mp3"
let play_btn = document.querySelector("#play");
let prev_btn = document.querySelector("#prev");
let next_btn = document.querySelector("#next");
let range = document.querySelector("#range");
let total_time = 0;
let currentTime = 0;
let isPlaying = false;
let song = new Audio();
window.onload = playSong;

function playSong(){
    song.src = music_name;
    console.log(song)
    
    
    play_btn.addEventListener('click',function(){
        if(!isPlaying){
            song.play();
            isPlaying = true;
            total_time = song.duration;
            range.max = total_time;
            $(play_btn).removeClass("fas fa-play")            
            $(play_btn).toggleClass("fas fa-pause")
          }else{
            song.pause();
            isPlaying = false;
            $(play_btn).toggleClass("fas fa-pause")
        }
       song.addEventListener('ended',function(){
            song.currentTime = 0
            song.pause();
            isPlaying = false;
            range.value = 0;
            $(play_btn).toggleClass("fas fa-play")
        })
        song.addEventListener('timeupdate',function(){
            range.value = song.currentTime;
        })
        range.addEventListener('change',function(){
            song.currentTime = range.value;
        })
       
    })
}