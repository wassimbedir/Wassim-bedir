// ==========================
// شاشة الدخول
// ==========================

window.addEventListener("load", function(){

    setTimeout(function(){

        const loader = document.getElementById("loader");

        if(loader){
            loader.classList.add("hide");
        }

    }, 1500);

});

// ==========================
// شاشة التحميل
// ==========================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(function () {

        loader.classList.add("hide");

    }, 800);

});


// ==========================
// زر العودة للأعلى
// ==========================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ==========================
// شريط التقدم
// ==========================

window.addEventListener("scroll", () => {

    const progressBar = document.getElementById("progressBar");

    if (!progressBar) return;

    const winScroll = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled =
        height > 0 ? (winScroll / height) * 100 : 0;

    progressBar.style.width = scrolled + "%";

});


// ==========================
// ظهور العناصر عند النزول
// ==========================

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    });

    document
        .querySelectorAll(".card,.about-preview,.quote-section")
        .forEach((el) => {

            el.style.opacity = "0";

            el.style.transform = "translateY(40px)";

            el.style.transition = ".8s ease";

            observer.observe(el);

        });

}


// ==========================
// القصيدة العشوائية
// ==========================

function randomPoem() {

    const poems = [

        "poem1.html",
        "poem2.html",
        "poem3.html",
        "poem4.html",
        "poem5.html",
        "poem6.html",
        "poem7.html",
        "poem8.html"

    ];

