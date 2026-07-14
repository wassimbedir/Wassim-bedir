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

