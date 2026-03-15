/* =========================
SCROLL ANIMATION INIT
========================= */

document.addEventListener("DOMContentLoaded", function () {

if (typeof AOS !== "undefined") {
AOS.init({
duration: 1000,
once: true
});
}

});


/* =========================
ENVELOPE OPENING
========================= */

function openInvite() {

const envelope = document.querySelector(".envelope");

envelope.classList.add("open");

setTimeout(function () {

document.getElementById("envelope-screen").style.display = "none";

document.getElementById("main-site").classList.remove("hidden");

openCurtain();

launchConfetti();

}, 900);

}


/* =========================
CURTAIN OPENING
========================= */

function openCurtain() {

const curtain = document.getElementById("curtain");

if (curtain) {
curtain.classList.add("curtain-open");
}

}


/* =========================
WEDDING COUNTDOWN
========================= */

const weddingDate = new Date("Dec 15, 2026 19:00:00").getTime();

const countdownTimer = setInterval(function () {

const now = new Date().getTime();

const distance = weddingDate - now;

if (distance <= 0) {

document.getElementById("countdown").innerHTML = "Today is the Wedding!";

clearInterval(countdownTimer);

return;

}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

const seconds = Math.floor((distance % (1000 * 60)) / 1000);

const countdownElement = document.getElementById("countdown");

if (countdownElement) {

countdownElement.innerHTML =
days + " Days " +
hours + " Hours " +
minutes + " Minutes " +
seconds + " Seconds";

}

}, 1000);


/* =========================
GOOGLE MAP BUTTON
========================= */

function openMap() {

window.open(
"https://maps.google.com/?q=Dubai Grand Hall",
"_blank"
);

}


/* =========================
WHATSAPP RSVP
========================= */

function rsvp() {

const phoneNumber = "971000000000";

const message = encodeURIComponent(
"Assalamu Alaikum. I will attend the wedding InshaAllah."
);

const url = "https://wa.me/" + phoneNumber + "?text=" + message;

window.open(url, "_blank");

}


/* =========================
CONFETTI CELEBRATION
========================= */

function launchConfetti() {

for (let i = 0; i < 120; i++) {

const confetti = document.createElement("div");

confetti.style.position = "fixed";
confetti.style.width = "8px";
confetti.style.height = "8px";
confetti.style.background = "#c9a96e";
confetti.style.left = Math.random() * 100 + "%";
confetti.style.top = "-10px";
confetti.style.opacity = Math.random();
confetti.style.borderRadius = "50%";

document.body.appendChild(confetti);

let position = -10;

const fall = setInterval(function () {

position += 5;

confetti.style.top = position + "px";

}, 30);

setTimeout(function () {

clearInterval(fall);

confetti.remove();

}, 3000);

}

}


/* =========================
SCRATCH TO REVEAL
========================= */

const canvas = document.getElementById("scratch");

if (canvas) {

const ctx = canvas.getContext("2d");

ctx.fillStyle = "#c9a96e";

ctx.fillRect(0, 0, canvas.width, canvas.height);

let isDrawing = false;

canvas.addEventListener("mousedown", function () {
isDrawing = true;
});

canvas.addEventListener("mouseup", function () {
isDrawing = false;
});

canvas.addEventListener("mousemove", function (e) {

if (!isDrawing) return;

ctx.globalCompositeOperation = "destination-out";

ctx.beginPath();

ctx.arc(e.offsetX, e.offsetY, 15, 0, Math.PI * 2);

ctx.fill();

document.getElementById("scratch-text").classList.remove("hidden");

});

canvas.addEventListener("touchmove", function (e) {

const rect = canvas.getBoundingClientRect();

const touch = e.touches[0];

const x = touch.clientX - rect.left;

const y = touch.clientY - rect.top;

ctx.globalCompositeOperation = "destination-out";

ctx.beginPath();

ctx.arc(x, y, 15, 0, Math.PI * 2);

ctx.fill();

document.getElementById("scratch-text").classList.remove("hidden");

});

}