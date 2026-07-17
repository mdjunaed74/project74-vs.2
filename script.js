// ==========================
// Project 74 Script
// ==========================

// Typing Animation
const text = "It's Me J";
let index = 0;

function typingEffect() {
    const title = document.querySelector(".hero h1");

    if (!title) return;

    title.textContent = "";

    function type() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(type, 120);
        }
    }

    type();
}

typingEffect();


// Live Clock & Date
function updateClock() {

    const clock = document.getElementById("clock");
    const date = document.getElementById("date");

    if (!clock || !date) return;

    const now = new Date();

    clock.textContent = now.toLocaleTimeString("en-GB");
    date.textContent = now.toDateString();
}

updateClock();
setInterval(updateClock, 1000);


// Back To Top Button
const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 250) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

// Loader
window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (!loader) return;

    loader.style.opacity = "0";

    setTimeout(function () {
        loader.style.display = "none";
    }, 200);

});



// Visitor Counter (Local)

let count = localStorage.getItem("visitorCount");

if (count === null) {
    count = 1;
} else {
    count = Number(count) + 1;
}

localStorage.setItem("visitorCount", count);

const visitor = document.getElementById("visitorCount");

if (visitor) {
    visitor.textContent = count;
}

console.log("Visitor script running");
const logo = document.getElementById("secretLogo");
const secret = document.getElementById("secretMessage");

let taps = 0;

logo.addEventListener("click", function () {

    taps++;

    console.log("Tap:", taps);

    if (taps === 7) {

        secret.style.opacity = "1";
        secret.style.visibility = "visible";

        setTimeout(function () {

            secret.style.opacity = "0";
            secret.style.visibility = "hidden";

        }, 3000);

        taps = 0;
    }

});
function submitRating(){

    const rating = document.querySelector('input[name="rate"]:checked');

    const result = document.getElementById("ratingResult");

    if(!rating){
        result.innerHTML = "⚠ Please select a rating first!";
        return;
    }

    result.innerHTML = "❤️ Thanks for rating Project 74!";

}
window.addEventListener("scroll",function(){

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("progressBar").style.width=scrolled+"%";

});
window.addEventListener("scroll",function(){

const nav=document.querySelector("nav");

if(window.scrollY>50){
nav.classList.add("scrolled");
}else{
nav.classList.remove("scrolled");
}

});

// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 120){
            section.classList.add("active");
        }

    });

}

revealSections();

document.addEventListener("click",function(e){

const ripple=document.createElement("span");

ripple.className="ripple";

ripple.style.left=e.clientX+"px";
ripple.style.top=e.clientY+"px";

document.body.appendChild(ripple);

setTimeout(()=>{
ripple.remove();
},700);

});
const words = [
    "Hi, I'm Md Junaed",
    "Welcome to Project 74",
    "74",
    "Football Lover ⚽",
    "Cristiano Ronaldo Fan 🐐"
    "Math Lover"
];

let wordIndex = 0;
let charIndex = 0;
let typing = true;

const typingElement = document.getElementById("typing");

function typeEffect(){

    if(typing){

        typingElement.textContent = words[wordIndex].substring(0,charIndex++);

        if(charIndex > words[wordIndex].length){
            typing = false;
            setTimeout(typeEffect,1500);
            return;
        }

    }else{

        typingElement.textContent = words[wordIndex].substring(0,charIndex--);

        if(charIndex < 0){
            typing = true;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, typing ? 90 : 45);

}

typeEffect();


const feedbackForm = document.querySelector("#feedback form");
const successMsg = document.getElementById("successMsg");

feedbackForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(feedbackForm);

    const response = await fetch(feedbackForm.action, {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        successMsg.style.display = "block";
        successMsg.innerHTML = "✅ Thank you! Your feedback has been sent.";
        feedbackForm.reset();
    } else {
        successMsg.style.display = "block";
        successMsg.innerHTML = "❌ Failed to send. Please try again.";
    }
});

