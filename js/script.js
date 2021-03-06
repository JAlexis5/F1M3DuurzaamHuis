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
    $('.licht').toggleClass('color');
    $('.licht-naam').toggleClass('color');
    $('.widget7-tekst1').toggleClass('color');
    $('.widget7-tekst2').toggleClass('color');
    $('.weather-icon').toggleClass('color');
    $('.temperature-description p').toggleClass('color');
    $('.location p').toggleClass('color');
    $('.cover-dark').toggleClass('color');
    $('.cover-light').toggleClass('color');
    $('.temp-text').toggleClass('color');
    $('.temp').toggleClass('color');
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

const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
inputSlider.oninput = (()=>{
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = (value/2) + "%";
  slideValue.classList.add("show");
});
inputSlider.onblur = (()=>{
  slideValue.classList.remove("show");
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

var waterdata = new XMLHttpRequest();
var url = "data-map/waterverbruik.json"
waterdata.open("GET", url, true);
waterdata.send();
waterdata.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var data = JSON.parse(this.responseText);
    var apparaat = data.water_verbruik.map(function(elem) {
      return elem.apparaat; 
    });
    var verbruik = data.water_verbruik.map(function(elem) {
      return elem.verbruik; 
    });
    var kleur = data.water_verbruik.map(function(elem) {
      return elem.kleur; 
    });
    var ctx = document.getElementById('canvas2').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: apparaat,
          datasets: [{
              label: 'Waterverbuik (lites) per week',
              data: verbruik, 
              backgroundColor: kleur,
              borderWidth: 0
          }]
      },
    });
  }
}

const lightswitch1 = document.getElementById('licht1button');
const lightswitch2 = document.getElementById('licht2button');

lightswitch1.addEventListener('DOMContentLoaded', updateSwitch1());
lightswitch2.addEventListener('DOMContentLoaded', updateSwitch2());


function updateSwitch1(){
  switch(lightswitch1.innerHTML) {
    case "aan":
      lightswitch1.innerHTML = "uit";
      document.getElementById('licht1icon').innerHTML = "<i class='far fa-lightbulb'></i>";
      break;
    case "uit":
      lightswitch1.innerHTML = "aan";
      document.getElementById('licht1icon').innerHTML = "<i style='color: orange;' class='fas fa-lightbulb'></i>";
      break;
  };
};

function updateSwitch2() {
  switch(lightswitch2.innerHTML) {
    case "aan":
      lightswitch2.innerHTML = "uit";
      document.getElementById('licht2icon').innerHTML = "<i class='far fa-lightbulb'></i>";
      break;
    case "uit":
      lightswitch2.innerHTML = "aan";
      document.getElementById('licht2icon').innerHTML = "<i style='color: orange;' class='fas fa-lightbulb'></i>";
      break;
  };
};

let temperatuur = 9;
const temperatuurUitvoer = document.getElementById("temperatuur");
const cirkelBoog = document.getElementById("cirkelBoog");
const thermostaat = document.getElementById("thermostaat");

const uitvoeren = (temp) => {
  temperatuurUitvoer.innerHTML = temp;
  let boog = (temp * 100) / 30;
  cirkelBoog.style.strokeDasharray = `${boog} ${100 - boog}`;
};
const animeerUitvoer = (temp) => {
  let t = 0;
  const timer = setInterval(() => {
    if (t <= temp) {
      uitvoeren(t);

      t++;
    } else {
      clearInterval(timer);
    }
  }, 25);
};

animeerUitvoer(thermostaat.value);

thermostaat.addEventListener("change", () => {
  animeerUitvoer(thermostaat.value);
});