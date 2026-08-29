// ==========================
// شاشة التحميل
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 800);

    }

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

    // ==========================
// انتقال الصفحات + الاقتباسات
// ==========================

const transitionQuotes = [
    "بعض الطرق لا نعرف إلى أين تقودنا، لكنها تستحق أن نسلكها.",
    "نكتب لأن في داخلنا أشياء لا تعرف طريقًا آخر للخروج.",
    "ولكل صفحة تُفتح، حكاية تنتظر أن تُروى.",
    "ربما كانت الكلمات وطنًا لمن لم يجد وطنًا.",
    "ليس كل ما يُقال يُنسى، وليس كل ما يُكتب يموت.",
    "بين سطرٍ وسطر، قد تختبئ حكاية كاملة.",
    "هناك أشياء لا يشرحها الكلام، فتتكفّل بها الكتابة.",
    "قد تبدأ الحكاية بكلمة، وتنتهي بعمرٍ كامل.",
    "نحن لا نكتب ما حدث فقط، بل ما تركه فينا ما حدث.",
    "وفي الصمت نصوصٌ لا يستطيع القلم ترجمتها.",
    "كل صفحة جديدة تمنحنا فرصة أخرى لنروي الحكاية.",
    "بعض الذكريات لا تشيخ، مهما مرّت عليها السنوات.",
    "لعل أجمل الحكايات هي تلك التي لم نخطط لكتابتها.",
    "ما دام في القلب شيء يُقال، فالقلم لم ينتهِ بعد.",
    "وفي كل انتقال، بداية صغيرة لحكاية جديدة."
];

const pageTransition = document.getElementById("pageTransition");
const transitionQuote = document.getElementById("transitionQuote");

if (pageTransition && transitionQuote) {

    document.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function(event) {

            const href = link.getAttribute("href");

            // إذا ماكانش رابط
            if (!href) return;

            // روابط داخل نفس الصفحة
            if (href.startsWith("#")) return;

            // روابط خارجية
            if (link.target === "_blank") return;

            // الرئيسية: خليها تخدم عادي
            if (
                href === "index.html" ||
                href === "./index.html"
            ) {
                return;
            }

            // منع الانتقال المباشر
            event.preventDefault();

            // اختيار اقتباس عشوائي
            const quote =
                transitionQuotes[
                    Math.floor(Math.random() * transitionQuotes.length)
                ];

            // وضع الاقتباس
            transitionQuote.textContent = quote;

            // إظهار شاشة الانتقال
            pageTransition.classList.add("show");

            // الانتقال بعد 4 ثواني
            setTimeout(function() {

                window.location.href = href;

            }, 4000);

        });

    });

                }
