/* ENVELOPE OPEN */

function openInvite(){

document.querySelector(".envelope").classList.add("open");

setTimeout(()=>{

document.getElementById("envelope-screen").style.display="none";

document.getElementById("main-site").classList.remove("hidden");

document.getElementById("curtain").classList.add("open");

launchConfetti();

},800);

}


/* COUNTDOWN */

const weddingDate = new Date("Dec 15, 2026 19:00:00").getTime();

setInterval(function(){

let now = new Date().getTime();

let distance = weddingDate - now;

let days = Math.floor(distance/(1000*60*60*24));
let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const countdown = document.getElementById("countdown");

if(countdown){

countdown.innerHTML =
days+" Days "+hours+" Hours "+minutes+" Minutes";

}

},1000);


/* GOOGLE MAP */

function openMap(){

window.open("https://maps.google.com/?q=Dubai Grand Hall","_blank");

}


/* WHATSAPP RSVP */

function rsvp(){

window.open("https://wa.me/971000000000?text=I will attend InshaAllah","_blank");

}


/* CONFETTI */

function launchConfetti(){

for(let i=0;i<120;i++){

let conf=document.createElement("div");

conf.style.position="fixed";
conf.style.width="6px";
conf.style.height="6px";
conf.style.background="#c9a96e";
conf.style.left=Math.random()*100+"%";
conf.style.top="-10px";
conf.style.opacity=Math.random();

document.body.appendChild(conf);

let fall=setInterval(()=>{
conf.style.top=parseInt(conf.style.top)+5+"px";
},30);

setTimeout(()=>{
clearInterval(fall);
conf.remove();
},3000);

}

}


/* SCRATCH CARD */

const canvas=document.getElementById("scratch");

if(canvas){

const ctx=canvas.getContext("2d");

ctx.fillStyle="#c9a96e";

ctx.fillRect(0,0,canvas.width,canvas.height);

canvas.addEventListener("mousemove",function(e){

ctx.globalCompositeOperation="destination-out";

ctx.beginPath();

ctx.arc(e.offsetX,e.offsetY,15,0,Math.PI*2);

ctx.fill();

document.getElementById("dateReveal").classList.remove("hidden");

});

}