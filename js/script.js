$('.random').each(function () {
  var x = Math.floor((Math.random() * 80) + 1);
  $(this).text(x)
});

document.getElementById('welkom').innerHTML = "Hoi " + (localStorage.getItem("storage")) + ", ";

const menuIconEl = $('.menu-icon');
const sidenavEl = $('.side-nav');
const sidenavCloseEl = $('.sidenav-close-icon');

const toggleClassName = (el, className) => {
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

let image1 = document.getElementById("circle-image1")
let image2 = document.getElementById("circle-image2")
let image3 = document.getElementById("circle-image3")
let image4 = document.getElementById("circle-image4")

$('.btn-background').on('click', function () {
    $('.body').toggleClass('color');
    $('.header').toggleClass('color');
    $('.main').toggleClass('color');
    $('#circle-image1').toggleClass('color');
    $('#circle-image1-b').toggleClass('color');
    $('#circle-image2').toggleClass('color');
    $('#circle-image2-b').toggleClass('color');
    $('#circle-image3').toggleClass('color');
    $('#circle-image3-b').toggleClass('color');
    $('#circle-image4').toggleClass('color');
    $('#circle-image4-b').toggleClass('color');
    $('.batterij-tekst').toggleClass('color');
    $('.lightmode').toggleClass('color');
    $('.darkmode').toggleClass('color');
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
    $('.widget7-tekst1').toggleClass('color');
    $('.widget7-tekst2').toggleClass('color');
    $('.weather-icon').toggleClass('color');
    $('.temperature-description p').toggleClass('color');
    $('.location p').toggleClass('color');
    $('.cover-dark').toggleClass('color');
    $('.cover-light').toggleClass('color');
    $('.fa-github').toggleClass('color');
})

music_name = "assets/clair-de-lune.mid";
let play_btn = document.querySelector("#play");
let prev_btn = document.querySelector("#prev");
let next_btn = document.querySelector("#next");
let range = document.querySelector("#range");
let play_img = document.querySelector("#play_img")
let total_time = 0;
let currentTime = 0;
let isPlaying = false;
let song = new Audio();
window.onload = playSong;

function playSong(){
    song.src = music_name;

    play_btn.addEventListener('click',function(){
        if(!isPlaying){
            song.play();
            isPlaying = true;
            total_time = song.duration;
            range.max = total_time;
            play_img.src = "assets/images/pause.svg";
          $('#muziek-cover').toggleClass('muziek-animation');
          }else{
            song.pause();
            isPlaying = false;
            play_img.src = "assets/images/play.svg";
          $('#muziek-cover').removeClass('muziek-animation');
        }
       song.addEventListener('ended',function(){
            song.currentTime = 0
            song.pause();
            isPlaying = false;
            range.value = 0;
            play_img.src = "assets/images/play.svg";
          $('#muziek-cover').removeClass('muziek-animation');
        })
        song.addEventListener('timeupdate',function(){
            range.value = song.currentTime;
        })
        range.addEventListener('change',function(){
            song.currentTime = range.value;
        })
       
    })
}

$("input[type=range]").mousemove(function (e) {
  var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
  var percent = val * 100;

  $(this).css('background-image',
      '-webkit-gradient(linear, left top, right top, ' +
      'color-stop(' + percent + '%, #0b8e36), ' +
      'color-stop(' + percent + '%, #101010)' +
      ')');

  $(this).css('background-image',
      '-moz-linear-gradient(left center, #101010 0%, #0b8e36)');
});

var gasdata = new XMLHttpRequest();
var url = "data-map/gasverbruik.json"
gasdata.open("GET", url, true);
gasdata.send();
gasdata.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var data = JSON.parse(this.responseText);
    var months = data.maand_verbruik.map(function(elem) {
      return elem.datum; 
    });
    var verbruik = data.maand_verbruik.map(function(elem) {
      return elem.verbruik; 
    });
    var ctx = document.getElementById('canvas').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: 'Gasverbruik (m3) per maand',
                data: verbruik, 
                backgroundColor: ['#3aaa35', '#0b8e36', '#076633', '#3aaa35', '#0b8e36', '#076633', '#3aaa35', '#0b8e36', '#076633', '#3aaa35', '#0b8e36', '#076633',],
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }
}