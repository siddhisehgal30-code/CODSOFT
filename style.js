// =========================
// Dream Travels JavaScript
// =========================

// Booking Modal
const modal = document.getElementById("bookingModal");

const openButtons = document.querySelectorAll(
".book-btn, #btn, .package-card button"
);

const closeBtn = document.querySelector(".close");

// Open Modal
openButtons.forEach(button => {
    button.addEventListener("click", () => {
        modal.style.display = "flex";
    });
});

// Close Modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close Outside
window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});


// Booking Form
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let destination = document.getElementById("destination").value;

    
    if(name === "" || email === "" || phone === "" || destination === ""){
        alert("⚠ Please fill all fields");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("❌ Please enter a valid email address");
        return;
    }

    if(phone.length !== 10 || isNaN(phone)){
        alert("❌ Please enter the valid phone number");
        return;
    }


    let booking = {
        name,
        email,
        phone,
        destination
    };

    let bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("🎉 Booking Successful!");

    bookingForm.reset();

    modal.style.display = "none";

    localStorage.removeItem("booking");
});


// Newsletter
const subscribeBtn = document.querySelector(".newsletter button");

subscribeBtn.addEventListener("click", () => {

    let email = document.querySelector(".newsletter input").value;

    if(email==""){
        alert("Please enter your email.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("❌ Please enter a valid email address");
        return;
    }


    alert("✅ Successfully Subscribed!");
    

    document.getElementById("newsletterEmail").value="";
});



        const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", function () {

    let value = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".photo");

    cards.forEach(card => {

        let place = card.querySelector("h2").innerText.toLowerCase();

        if(place.includes(value)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});

// ===============================
// Animated Counter
// ===============================

const counters = document.querySelectorAll(".stat h2");

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight && !started) {

        started = true;

        counters.forEach(counter => {

            const target = counter.innerText;

            if (target === "24/7") return;

            let number = parseInt(target);

            let count = 0;

            const speed = Math.ceil(number / 80);

            const update = () => {

                count += speed;

                if (count < number) {

                    counter.innerText = count + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = number + "+";

                }

            };

            update();

        });

    }

});


// ===============================
// Active Navbar
// ===============================

const sections = document.querySelectorAll("section, div[id]");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Smooth Scroll
// ===============================

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// Back To Top Button
// ===============================

// Button Create
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

// Show Hide

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

// Scroll Top

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// ===============================
// Hero Typing Effect
// ===============================

const heroTitle=document.querySelector(".hero-title");

const text="Explore the World with Dream Travels";

let index=0;

heroTitle.innerHTML="";

function typing(){

if(index<text.length){

heroTitle.innerHTML+=text.charAt(index);

index++;

setTimeout(typing,80);

}

}

typing();


// ===============================
// Scroll Reveal
// ===============================

const reveal=document.querySelectorAll(
".photo,.hotel,.card,.package-card,.gallery-card,.test-container,.stat"
);

window.addEventListener("scroll",()=>{

reveal.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){

item.classList.add("show");

}

});

});