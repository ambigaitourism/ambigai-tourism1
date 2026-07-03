// =========================
// Ambigai Tourism Script
// =========================

// Navbar background on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#111";
        header.style.transition = "0.3s";
    } else {
        header.style.background = "rgba(0,0,0,.75)";
    }
});

// Booking Form -> WhatsApp
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = form.querySelectorAll("input")[0].value;
        const phone = form.querySelectorAll("input")[1].value;
        const pickup = form.querySelectorAll("input")[2].value;
        const drop = form.querySelectorAll("input")[3].value;
        const date = form.querySelectorAll("input")[4].value;

        const message =
`🚖 *Ambigai Tourism Booking*

👤 Name: ${name}
📞 Phone: ${phone}
📍 Pickup: ${pickup}
🏁 Drop: ${drop}
📅 Date: ${date}`;

        const url =
"https://wa.me/919626172090?text=" +
encodeURIComponent(message);

        window.open(url, "_blank");
    });

}

// Fade Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

});

document.querySelectorAll(".section,.card,.review").forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".8s";

    observer.observe(item);

});

// Scroll To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.style.position = "fixed";
topBtn.style.bottom = "95px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0d6efd";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "20px";
topBtn.style.zIndex = "999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// Current Year
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
    `© ${new Date().getFullYear()} Ambigai Tourism | All Rights Reserved`;
}
