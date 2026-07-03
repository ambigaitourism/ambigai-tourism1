/* ==========================================
   AMBIGAI TOURISM
   Premium JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       LOADER
    =============================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        },1200);

    });

    /* ===============================
       STICKY HEADER
    =============================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 80){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });

    /* ===============================
       MOBILE MENU
    =============================== */

    const menuBtn = document.querySelector(".menu-btn");

    const nav = document.querySelector("nav");

    if(menuBtn){

        menuBtn.addEventListener("click",()=>{

            nav.classList.toggle("active");

            menuBtn.innerHTML = nav.classList.contains("active")

            ? '<i class="fa-solid fa-xmark"></i>'

            : '<i class="fa-solid fa-bars"></i>';

        });

    }

    /* Close menu after clicking */

    document.querySelectorAll("nav a").forEach(link=>{

        link.addEventListener("click",()=>{

            nav.classList.remove("active");

            menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

        });

    });

    /* ===============================
       SMOOTH SCROLL
    =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });

});
/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = Number(counter.dataset.target);
    const speed = 40;

    let count = 0;

    const update = () => {

        const increment = Math.ceil(target / speed);

        if (count < target) {

            count += increment;

            if (count > target) count = target;

            counter.innerText = count;

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealItems = document.querySelectorAll(
    ".fade-up, .zoom-in, .stat-box, .why-card, .fleet-card, .package-card, .review-card, .faq-item, .info-card"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {
    threshold: 0.15
});

revealItems.forEach(item => {

    item.classList.add("fade-up");

    revealObserver.observe(item);

});

/* ==========================================
   IMAGE PARALLAX
========================================== */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero video");

    if (hero) {

        hero.style.transform =
            `translateY(${window.scrollY * 0.15}px)`;

    }

});

/* ==========================================
   BUTTON HOVER SCALE
========================================== */

document.querySelectorAll(
".primary-btn,.book-btn,.call-btn"
).forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

/* ==========================================
   PAGE TITLE EFFECT
========================================== */

document.querySelectorAll(".section-heading h2").forEach(title => {

    title.addEventListener("mouseenter", () => {

        title.style.letterSpacing = "1px";

    });

    title.addEventListener("mouseleave", () => {

        title.style.letterSpacing = "0";

    });

});
/* ==========================================
   WHATSAPP BOOKING
========================================== */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = bookingForm.querySelectorAll("input,select");

        const name = inputs[0].value.trim();
        const phone = inputs[1].value.trim();
        const pickup = inputs[2].value.trim();
        const drop = inputs[3].value.trim();
        const date = inputs[4].value;
        const time = inputs[5].value;
        const vehicle = inputs[6].value;

        if (
            !name ||
            !phone ||
            !pickup ||
            !drop ||
            !date ||
            !time ||
            vehicle === "Select Vehicle"
        ) {
            alert("Please fill all booking details.");
            return;
        }

        const message =
`🚖 *NEW CAB BOOKING*

👤 Name: ${name}
📞 Phone: ${phone}

📍 Pickup: ${pickup}
🏁 Drop: ${drop}

📅 Date: ${date}
🕒 Time: ${time}

🚗 Vehicle: ${vehicle}

Booked from:
🌐 Ambigai Tourism Website`;

        const whatsapp =
"https://wa.me/919626172090?text=" +
encodeURIComponent(message);

        window.open(whatsapp, "_blank");

        bookingForm.reset();

        alert("Redirecting to WhatsApp...");

    });

}

/* ==========================================
   CONTACT FORM
========================================== */

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const fields =
contactForm.querySelectorAll("input,textarea");

        const name = fields[0].value.trim();
        const email = fields[1].value.trim();
        const phone = fields[2].value.trim();
        const message = fields[3].value.trim();

        if(name==="" || phone===""){

            alert("Please enter your name and phone number.");

            return;

        }

        const whatsappText =
`📩 *Customer Enquiry*

👤 Name: ${name}

📧 Email: ${email}

📞 Phone: ${phone}

💬 Message:
${message}`;

        window.open(

"https://wa.me/919626172090?text="+
encodeURIComponent(whatsappText),

"_blank"

);

        contactForm.reset();

        alert("Your enquiry is ready to send via WhatsApp.");

    });

}

/* ==========================================
   PHONE NUMBER VALIDATION
========================================== */

document.querySelectorAll("input[type='tel']").forEach(input=>{

    input.addEventListener("input",()=>{

        input.value=input.value.replace(/[^0-9]/g,"");

        if(input.value.length>10){

            input.value=input.value.slice(0,10);

        }

    });

});

/* ==========================================
   INPUT FOCUS EFFECT
========================================== */

document.querySelectorAll("input,textarea,select").forEach(field=>{

    field.addEventListener("focus",()=>{

        field.parentElement?.classList.add("active");

    });

    field.addEventListener("blur",()=>{

        field.parentElement?.classList.remove("active");

    });

});
/* ==========================================
   LIGHTBOX
========================================== */

.lightbox{

position:fixed;

top:0;
left:0;

width:100%;
height:100%;

background:rgba(0,0,0,.92);

display:flex;

justify-content:center;

align-items:center;

opacity:0;

visibility:hidden;

transition:.3s;

z-index:99999;

}

.lightbox.show{

opacity:1;

visibility:visible;

}

.lightbox img{

max-width:90%;

max-height:85%;

border-radius:15px;

box-shadow:0 20px 50px rgba(0,0,0,.4);

}

.lightbox-close{

position:absolute;

top:25px;

right:35px;

font-size:50px;

color:#fff;

cursor:pointer;

transition:.3s;

user-select:none;

}

.lightbox-close:hover{

transform:rotate(90deg);

color:#00d084;

}
