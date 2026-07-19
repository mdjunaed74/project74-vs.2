// ===========================================
// Project 74 v4.0
// Script Part 1
// Core System
// ===========================================

// ---------- Typing Animation ----------

const typingWords = [
    "It's Me J",
    "Welcome To Project 74",
    "Official Portfolio",
    "Designed By Md Junaed",
    "Powered By J74 AI"
];

let typingIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typingEffect(){

    if(!typing) return;

    const word = typingWords[typingIndex];

    if(!deleting){

        typing.textContent = word.substring(0,charIndex++);

        if(charIndex > word.length){

            deleting = true;

            setTimeout(typingEffect,1500);

            return;

        }

    }else{

        typing.textContent = word.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            typingIndex++;

            if(typingIndex >= typingWords.length){

                typingIndex = 0;

            }

        }

    }

    setTimeout(typingEffect,deleting ? 45 : 90);

}

typingEffect();

// ---------- Live Clock ----------

function updateClock(){

    const clock = document.getElementById("clock");
    const date = document.getElementById("date");

    if(!clock || !date) return;

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString("en-GB");

    date.innerHTML = now.toDateString();

}

updateClock();

setInterval(updateClock,1000);

// ---------- Loader ----------

window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");

    if(!loader) return;

    setTimeout(()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },800);

    },2000);

});

// ---------- Visitor Counter ----------

let visitor = localStorage.getItem("visitorCount");

if(visitor == null){

    visitor = 1;

}else{

    visitor = Number(visitor)+1;

}

localStorage.setItem("visitorCount",visitor);

const visitorBox = document.getElementById("visitorCount");

if(visitorBox){

    visitorBox.innerHTML = visitor;

}

// ---------- Progress Bar ----------

window.addEventListener("scroll",()=>{

    const progress = document.getElementById("progressBar");

    if(!progress) return;

    const scrollTop = document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const percent = (scrollTop/height)*100;

    progress.style.width = percent + "%";

});

// ---------- Navbar ----------

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(!nav) return;

    if(window.scrollY > 50){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

});

// ---------- Back To Top ----------

const topBtn = document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}
// ===========================================
// Script Part 2
// Effects & Utilities
// ===========================================

// ---------- Scroll Reveal ----------

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealSections);

revealSections();


// ---------- Ripple Effect ----------

document.addEventListener("click",(e)=>{

    const ripple = document.createElement("span");

    ripple.className = "ripple";

    ripple.style.left = e.clientX + "px";

    ripple.style.top = e.clientY + "px";

    document.body.appendChild(ripple);

    setTimeout(()=>{

        ripple.remove();

    },700);

});


// ---------- Theme ----------

function setTheme(color){

    document.documentElement.style.setProperty("--theme-color",color);

    localStorage.setItem("theme",color);

}

const savedTheme = localStorage.getItem("theme");

if(savedTheme){

    document.documentElement.style.setProperty("--theme-color",savedTheme);

}


// ---------- Secret Message ----------

const secretMessage = document.getElementById("secretMessage");

const logo = document.querySelector(".logo");

let tapCount = 0;

if(logo && secretMessage){

logo.addEventListener("click",()=>{

tapCount++;

if(tapCount >= 7){

secretMessage.style.opacity = "1";

secretMessage.style.visibility = "visible";

setTimeout(()=>{

secretMessage.style.opacity = "0";

secretMessage.style.visibility = "hidden";

},3000);

tapCount = 0;

}

});

}


// ---------- Feedback ----------

const feedbackForm = document.getElementById("feedbackForm");

const successMsg = document.getElementById("successMsg");

if(feedbackForm){

feedbackForm.addEventListener("submit",(e)=>{

e.preventDefault();

successMsg.style.display = "block";

successMsg.innerHTML =
"✅ Thank you! Your feedback has been received.";

feedbackForm.reset();

});

}


// ---------- Mobile Menu ----------

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.querySelector("nav ul");

if(menuBtn && navMenu){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

}
// ===========================================
// Script Part 3
// J74 AI Engine v4.0
// ===========================================

// ---------- Elements ----------

const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// ---------- Open / Close ----------

if(chatBtn && chatBox){

chatBtn.onclick = ()=>{

chatBox.style.display="flex";

userInput.focus();

};

}

if(closeChat && chatBox){

closeChat.onclick = ()=>{

chatBox.style.display="none";

};

}

// ---------- Add Message ----------

function addMessage(text,type){

const div=document.createElement("div");

div.className=type;

div.innerHTML=text;

messages.appendChild(div);

messages.scrollTop=messages.scrollHeight;

}

// ---------- Smart Search ----------

function getReply(question){

question=question.toLowerCase().trim();

if(typeof knowledge==="undefined"){

return "⚠ AI Database Missing.";

}

// Remove extra spaces
question=question.replace(/\s+/g," ");

for(let item of knowledge){

for(let key of item.keys){

if(question.includes(key.toLowerCase())){

return item.reply;

}

}

}

// Unknown

return "🤔 Sorry! I don't know this yet.<br><br>Try asking in Bangla, English or Banglish.";

}

// ---------- Send ----------

function sendMessage(){

const text=userInput.value.trim();

if(text==="") return;

addMessage("🧑 "+text,"userMsg");

userInput.value="";

setTimeout(()=>{

const reply=getReply(text);

addMessage("🤖 "+reply,"botMsg");

},500);

}

// ---------- Button ----------

if(sendBtn){

sendBtn.onclick=sendMessage;

}

// ---------- Enter ----------

if(userInput){

userInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

sendMessage();

}

});

}
