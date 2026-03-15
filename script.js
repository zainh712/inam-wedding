
function openInvite(){

document.getElementById("envelope-screen").style.display="none";
document.getElementById("main-site").classList.remove("hidden");

launchConfetti();

}


/* Countdown */

const weddingDate = new Date("Dec 15, 2026 19:00:00").getTime();

setInterval(function(){

let now = new Date().getTime();

let distance = weddingDate - now;

let days = Math.floor(distance/(1000*60*60*24));
let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("countdown").innerHTML =
days+" Days "+hours+" Hours "+minutes+" Minutes";

},1000);



/* Map */

function openMap(){

window.open("https://maps.google.com/?q=Dubai Grand Hall");

}


/* RSVP */

function rsvp(){

window.open("https://wa.me/971000000000?text=I will attend the wedding InshaAllah");

}


/* Confetti */

function launchConfetti(){

for(let i=0;i<100;i++){

let conf=document.createElement("div");

conf.className="confetti";

conf.style.left=Math.random()*100+"%";

document.body.appendChild(conf);

setTimeout(()=>conf.remove(),3000);

}

}