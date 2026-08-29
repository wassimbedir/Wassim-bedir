// ==========================
// شاشة التحميل
// ==========================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.classList.add("hide");

},800);

});

// ==========================
// زر العودة للأعلى
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(window.scrollY > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ==========================
// شريط التقدم
// ==========================

window.addEventListener("scroll", () => {

const winScroll = document.documentElement.scrollTop;

const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const scrolled = (winScroll / height) * 100;

document.getElementById("progressBar").style.width = scrolled + "%";

});

// ==========================
// ظهور العناصر عند النزول
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card,.about-preview,.quote-section").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s";

observer.observe(el);

});

function randomPoem(){

const poems = [

"poem1.html",
"poem2.html",
"poem3.html",
"poem4.html",
"poem5.html"

];

const randomIndex = Math.floor(Math.random() * poems.length);

window.location.href = poems[randomIndex];

}

/* =================================
   🖱️ مؤشر الفأرة الذهبي
================================= */

if (window.innerWidth >= 769) {

    const dot = document.createElement("div");
    const ring = document.createElement("div");

    dot.className = "cursor-dot";
    ring.className = "cursor-ring";

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";

    });

    function animateCursor(){

        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        ring.style.left = ringX + "px";
        ring.style.top = ringY + "px";

        requestAnimationFrame(animateCursor);

    }

    animateCursor();

    document.querySelectorAll("a, button").forEach((element) => {

        element.addEventListener("mouseenter", () => {
            ring.classList.add("hover");
        });

        element.addEventListener("mouseleave", () => {
            ring.classList.remove("hover");
        });

    });

}

/* 🖱️ Custom Cursor */

if (window.matchMedia("(min-width: 769px)").matches) {

    const cursor = document.createElement("div");

    cursor.id = "custom-cursor";

    document.body.appendChild(cursor);

    document.addEventListener("mousemove", function(e){

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

    document.querySelectorAll("a, button").forEach(function(element){

        element.addEventListener("mouseenter", function(){
            cursor.classList.add("active");
        });

        element.addEventListener("mouseleave", function(){
            cursor.classList.remove("active");
        });

    });

}
