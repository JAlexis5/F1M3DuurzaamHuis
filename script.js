
function redirect(){
    let naam = document.getElementById('login').value;
    window.location.href = "https://samedpolat.nl/GreenHouse/home.html"
    console.log("test");
    localStorage.setItem("storage",naam);
}

document.getElementById('welkom').innerHTML = "Welkom, " + (localStorage.getItem("storage"));
